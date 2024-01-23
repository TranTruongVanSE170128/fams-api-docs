import { ApiResponseProperty } from '@nestjs/swagger'
import { ClassStatus } from '@prisma/client'
import { GetScoreWithOutClassDto } from 'src/scores/dtos/get-score-with-out-class.dto'
import { GetStudentClassModuleWithOutClassDto } from 'src/student-class-modules/dtos/get-student-class-module-with-out-class.dto'

export class GetClassScoresDto {
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

  @ApiResponseProperty({ type: [GetStudentClassModuleWithOutClassDto] })
  studentClassModules: GetStudentClassModuleWithOutClassDto[]

  @ApiResponseProperty({ type: [GetScoreWithOutClassDto] })
  scores: GetScoreWithOutClassDto[]
}
