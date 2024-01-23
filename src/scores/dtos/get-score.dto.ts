import { ApiResponseProperty } from '@nestjs/swagger'

export class GetScoreDto {
  @ApiResponseProperty()
  assignmentId: number

  @ApiResponseProperty()
  studentId: number

  @ApiResponseProperty()
  classId: number

  @ApiResponseProperty()
  scoreValue: number

  @ApiResponseProperty()
  submissionDate: Date
}
