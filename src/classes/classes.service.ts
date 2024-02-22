import { Injectable, NotFoundException } from '@nestjs/common'
import { Class, Student } from '@prisma/client'
import { NotFoundError } from 'rxjs'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) {}

  async getRequiredClassById(id: number): Promise<Class | null> {
    const result = await this.prisma.class.findUnique({
      where: {
        id
      }
    })

    if (result) {
      return result
    }

    throw new NotFoundException('Could not find class')
  }

  async getRequiredClassDetailById(id: number): Promise<Class | null> {
    const result = await this.prisma.class.findUnique({
      where: {
        id
      },
      include: {
        students: {
          include: {
            studentClasses: {
              where: {
                classId: id
              }
            }
          }
        },
        createdUser: true,
        managers: true,
        reservations: true,
        program: {
          include: {
            createdUser: true,
            updatedUser: true
          }
        },
        studentClasses: true,
        updatedUser: true
      }
    })

    if (result) {
      return result
    }

    throw new NotFoundException('Could not find class')
  }

  async getStudentDetailByClass(classId: number, studentId: number): Promise<Student> {
    return await this.prisma.student.findUnique({
      where: {
        id: studentId
      },
      include: {
        studentClassModules: {
          where: {
            classId
          },
          include: {
            module: true
          }
        },
        scores: {
          where: {
            classId
          },
          include: {
            assignment: true
          }
        },
        currentClass: {
          include: {
            program: true,
            studentClasses: {
              where: {
                studentId
              }
            }
          }
        }
      }
    })
  }
}
