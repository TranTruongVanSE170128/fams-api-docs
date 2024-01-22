import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateReservationDto } from './dtos/create-reservation.dto'
import { StudentsService } from 'src/students/students.service'
import { ClassesService } from 'src/classes/classes.service'
import { StudentClassesService } from 'src/student-classes/student-classes.service'
import { inWithin6Months } from 'src/utils'

@Injectable()
export class ReservationsService {
  constructor(
    private prisma: PrismaService,
    private studentsService: StudentsService,
    private classesService: ClassesService,
    private studentClassesService: StudentClassesService
  ) {}

  async getReservations() {
    return await this.prisma.reservation.findMany({
      include: {
        class: true,
        student: true
      }
    })
  }

  async createReservation(body: CreateReservationDto) {
    if (!inWithin6Months(body.startDate, body.endDate)) {
      throw new BadRequestException('The total reservation period must be between 0 and 6 months')
    }

    const student = await this.studentsService.getRequiredStudentById(body.studentId)
    const class_ = await this.classesService.getRequiredClassById(body.classId)
    const studentClass = await this.studentClassesService.getRequiredStudentClass(student.id, class_.id)

    if (class_.status !== 'Active' || studentClass.attendingStatus !== 'InClass') {
      throw new BadRequestException(
        'The class should be Active and the attending status should be InClass before the add reservation'
      )
    }

    //everything good, let's add the reservation
    await this.prisma.reservation.create({
      data: {
        classId: class_.id,
        studentId: student.id,
        reason: body.reason,
        startDate: body.startDate,
        endDate: body.endDate
      }
    })

    await this.prisma.studentClass.update({
      where: {
        classId_studentId: {
          classId: class_.id,
          studentId: student.id
        }
      },
      data: {
        attendingStatus: 'Reserve'
      }
    })

    await this.prisma.student.update({
      where: {
        id: student.id
      },
      data: {
        status: 'InActive'
      }
    })
  }
}
