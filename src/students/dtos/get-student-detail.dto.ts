import { ApiResponseProperty } from '@nestjs/swagger'
import { Gender, StudentStatus } from '@prisma/client'
import { GetClassWithProgramDto } from 'src/classes/dtos/get-class-with-program.dto'
import { GetClassDto } from 'src/classes/dtos/get-class.dto'
import { GetReservationDto } from 'src/reservations/dtos/get-reservation.dto'
import { GetStudentClassWithClassDto } from 'src/student-classes/dtos/get-student-class-with-class.dto'

export class GetStudentDetailDto {
  @ApiResponseProperty()
  id: number

  @ApiResponseProperty()
  fullName: string

  @ApiResponseProperty()
  dob?: Date

  @ApiResponseProperty({ enum: Gender })
  gender: Gender

  @ApiResponseProperty()
  phone: string

  @ApiResponseProperty()
  email: string

  @ApiResponseProperty()
  university: string

  @ApiResponseProperty()
  major: string

  @ApiResponseProperty()
  graduatedDate: number

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
  classCode: number

  @ApiResponseProperty({ type: GetClassWithProgramDto })
  currentClass?: GetClassWithProgramDto

  @ApiResponseProperty({ type: GetReservationDto })
  reservation: GetReservationDto

  @ApiResponseProperty({ type: [GetStudentClassWithClassDto] })
  studentClasses: GetStudentClassWithClassDto[]
}
