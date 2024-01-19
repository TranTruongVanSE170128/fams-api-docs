import { Injectable } from '@nestjs/common'
import { Student } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { CreateStudentDto } from 'src/students/dtos/create-student.dto'

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  async insertStudent(dto: CreateStudentDto): Promise<Student> {
    return await this.prisma.student.create({
      data: {
        ...dto,
        joinedDate: new Date(),
        status: 'Active'
      }
    })
  }

  async getStudents(): Promise<Student[]> {
    return await this.prisma.student.findMany()
  }
}
