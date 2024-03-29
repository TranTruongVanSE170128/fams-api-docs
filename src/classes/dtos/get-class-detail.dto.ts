import { ApiResponseProperty } from '@nestjs/swagger'
import { ClassStatus, Program, Reservation, Student, StudentClass, User } from '@prisma/client'
import { GetProgramDto } from 'src/programs/dtos/get-program.dto'
import { GetReservationDto } from 'src/reservations/dtos/get-reservation.dto'
import { GetScoreDto } from 'src/scores/dtos/get-score.dto'
import { GetStudentClassModuleDto } from 'src/student-class-modules/dtos/get-student-class-module.dto'
import { GetStudentClassWithClassDto } from 'src/student-classes/dtos/get-student-class-with-class.dto'
import { GetStudentClassWithStudentDto } from 'src/student-classes/dtos/get-student-class-with-student.dto'
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
  managers: GetUserDto[]

  @ApiResponseProperty({ type: GetProgramDto })
  program: GetProgramDto

  @ApiResponseProperty({ type: GetUserDto })
  createdUser: User

  @ApiResponseProperty({ type: GetUserDto })
  updatedUser: User

  @ApiResponseProperty({ type: [GetStudentClassWithStudentDto] })
  studentClasses: StudentClass[]

  @ApiResponseProperty({ type: [GetReservationDto] })
  reservations: GetReservationDto[]

  // @ApiResponseProperty({ type: [GetStudentClassModuleDto] })
  // studentClassModules: GetStudentClassModuleDto[]

  // @ApiResponseProperty({ type: [GetScoreDto] })
  // scores: GetScoreDto[]
}
