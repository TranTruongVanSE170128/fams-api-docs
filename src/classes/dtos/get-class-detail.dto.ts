import { ApiResponseProperty } from '@nestjs/swagger'
import { ClassStatus, Program, Reservation, Student, StudentClass, User } from '@prisma/client'
import { GetProgramDto } from 'src/programs/dtos/get-program.dto'
import { GetReservationDto } from 'src/reservations/dtos/get-reservation.dto'
import { GetStudentClassDto } from 'src/student-classes/dtos/get-student-class.dto'
import { GetStudentDto } from 'src/students/dtos/get-student.dto'
import { GetUserDto } from 'src/users/dtos/get-user.dto'

export class GetClassDetailDto {
  @ApiResponseProperty()
  id: number

  @ApiResponseProperty()
  className: string

  @ApiResponseProperty()
  startDate: Date

  @ApiResponseProperty()
  endDate: Date

  @ApiResponseProperty()
  createdDate: Date

  @ApiResponseProperty()
  createdUserId: number

  @ApiResponseProperty()
  updatedDate: Date

  @ApiResponseProperty()
  updatedUserId: number

  @ApiResponseProperty()
  duration: string

  @ApiResponseProperty()
  location: string

  @ApiResponseProperty({ enum: ClassStatus })
  status: ClassStatus

  @ApiResponseProperty()
  programId: number

  @ApiResponseProperty({ type: [GetUserDto] })
  managers: User[]

  @ApiResponseProperty({ type: GetProgramDto })
  program: Program

  @ApiResponseProperty({ type: GetUserDto })
  createdUser: User

  @ApiResponseProperty({ type: GetUserDto })
  updatedUser: User

  @ApiResponseProperty({ type: [GetStudentDto] })
  students: Student[]

  @ApiResponseProperty({ type: [GetStudentClassDto] })
  studentClasses: StudentClass[]

  @ApiResponseProperty({ type: [GetReservationDto] })
  reservations: GetReservationDto[]
}
