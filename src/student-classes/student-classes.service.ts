import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class StudentClassesService {
  constructor(private prisma: PrismaService) {}

  async getRequiredStudentClass(studentId: number, classId: number) {
    const studentClass = await this.prisma.studentClass.findUnique({
      where: {
        classId_studentId: {
          classId,
          studentId
        }
      }
    })

    if (!studentClass) {
      throw new BadRequestException('This student is not belong to the class')
    }

    return studentClass
  }
}
