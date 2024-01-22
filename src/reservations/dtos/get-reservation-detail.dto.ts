import { ApiResponseProperty } from '@nestjs/swagger'
import { GetClassDto } from 'src/classes/dtos/get-class.dto'
import { GetStudentDto } from 'src/students/dtos/get-student.dto'

export class GetReservationDetailDto {
  @ApiResponseProperty()
  id: number

  @ApiResponseProperty()
  classId: number

  @ApiResponseProperty()
  studentId: number

  @ApiResponseProperty()
  reason: string

  @ApiResponseProperty()
  startDate: Date

  @ApiResponseProperty()
  endDate: Date

  @ApiResponseProperty({ type: GetClassDto })
  class: GetClassDto

  @ApiResponseProperty({ type: GetStudentDto })
  student: GetStudentDto
}
