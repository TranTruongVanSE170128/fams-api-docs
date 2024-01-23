import { ApiResponseProperty } from '@nestjs/swagger'
import { GetAssignmentDto } from 'src/assignment/dtos/get-assignment.dto'
import { GetStudentDto } from 'src/students/dtos/get-student.dto'

export class GetScoreWithOutClassDto {
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

  @ApiResponseProperty({ type: GetStudentDto })
  student: GetStudentDto

  @ApiResponseProperty({ type: GetAssignmentDto })
  assignment: GetAssignmentDto
}
