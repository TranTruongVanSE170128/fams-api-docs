import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { AttendingStatus, Prisma, Student } from '@prisma/client'
import { ClassesService } from 'src/classes/classes.service'
import { PrismaService } from 'src/prisma.service'
import { CreateStudentDto } from 'src/students/dtos/create-student.dto'
import { UpdateStudentDto } from './dtos/update-student.dto'
import { QueryStudentsDto } from './dtos/query-students.dto'
import { PagedResultStudent } from './dtos/paged-result-students.dto'

@Injectable()
export class StudentsService {
  constructor(
    private prisma: PrismaService,
    private classService: ClassesService
  ) {}

  async insertStudent(dto: CreateStudentDto): Promise<Student> {
    const existStudentByEmail = await this.prisma.student.findUnique({
      where: {
        email: dto.email
      }
    })

    const existStudentByPhone = await this.prisma.student.findUnique({
      where: {
        phone: dto.phone
      }
    })

    if (existStudentByEmail || existStudentByPhone) {
      throw new BadRequestException('The email or/and phone number is already used')
    }

    //try get class
    await this.classService.getRequiredClassById(dto.classCode)

    const student = await this.prisma.student.create({
      data: {
        ...dto,
        joinedDate: new Date(),
        status: 'Active'
      }
    })

    await this.prisma.studentClass.create({
      data: {
        classId: dto.classCode,
        studentId: student.id,
        attendingStatus: 'InClass',
        certificateStatus: 'Disable',
        gpaLevel: 'UnScore',
        result: 'NotYet'
      }
    })

    return student
  }

  async getStudents({
    pageNumber = 1,
    pageSize = 10,
    searchQuery = '',
    status
  }: QueryStudentsDto): Promise<PagedResultStudent> {
    const whereInput: any = {
      AND: [
        {
          OR: [
            {
              fullName: {
                contains: searchQuery
              }
            },
            {
              email: {
                contains: searchQuery
              }
            },
            {
              major: {
                contains: searchQuery
              }
            },
            {
              university: {
                contains: searchQuery
              }
            }
          ]
        }
      ]
    }

    if (status) {
      whereInput.AND.push({
        status: {
          equals: status
        }
      })
    }

    const totalCount = await this.prisma.student.count({ where: whereInput })

    const students = await this.prisma.student.findMany({
      skip: pageSize * (pageNumber - 1),
      take: pageSize,
      where: whereInput
    })

    return {
      pageNumber,
      pageSize,
      totalCount,
      items: students
    } as PagedResultStudent
  }

  async getRequiredStudentDetailById(id: number): Promise<Student | null> {
    const result = await this.prisma.student.findUnique({
      where: {
        id
      },
      include: {
        currentClass: true,
        reservation: true,
        studentClasses: {
          include: {
            class: {
              include: {
                program: true
              }
            }
          }
        }
      }
    })

    if (result) {
      return result
    }

    throw new NotFoundException('Could not find student')
  }

  async getRequiredStudentById(id: number): Promise<Student | null> {
    const result = await this.prisma.student.findUnique({ where: { id } })

    if (result) {
      return result
    }

    throw new NotFoundException('Could not find student')
  }

  async updateStudent(id: number, body: UpdateStudentDto) {
    await this.getRequiredStudentById(id)

    return await this.prisma.student.update({
      where: {
        id
      },
      data: body
    })
  }
}
