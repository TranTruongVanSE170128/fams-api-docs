import { ApiResponseProperty } from '@nestjs/swagger'
import { Class, Gender, Reservation, StudentClass, StudentStatus } from '@prisma/client'
import { GetClassDto } from 'src/classes/dtos/get-class.dto'
import { GetReservationDto } from 'src/reservations/dtos/get-reservation.dto'
import { GetStudentClassDto } from 'src/student-classes/dtos/get-student-class.dto'

export class GetStudentDetailDto {
  @ApiResponseProperty()
  id: number

  @ApiResponseProperty()
  phone: string

  @ApiResponseProperty()
  email: string

  @ApiResponseProperty()
  fullName: string

  @ApiResponseProperty({ enum: Gender })
  gender: Gender

  @ApiResponseProperty()
  major: string

  @ApiResponseProperty()
  dob: Date

  @ApiResponseProperty()
  graduatedDate: Date

  @ApiResponseProperty()
  gpa: number

  @ApiResponseProperty()
  address: string

  @ApiResponseProperty({ enum: StudentStatus })
  status: StudentStatus

  @ApiResponseProperty()
  reCer: string

  @ApiResponseProperty()
  joinedDate: Date

  @ApiResponseProperty()
  university: string

  @ApiResponseProperty()
  classCode: number

  @ApiResponseProperty()
  currentClass: GetClassDto

  @ApiResponseProperty({ type: [GetStudentClassDto] })
  studentClasses: GetStudentClassDto[]

  @ApiResponseProperty()
  reservation: GetReservationDto
}