import { ApiResponseProperty } from '@nestjs/swagger'
import { GetClassWithProgramDto } from 'src/classes/dtos/get-class-with-program.dto'
import { GetClassDto } from 'src/classes/dtos/get-class.dto'

export class GetReservationDto {
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

  @ApiResponseProperty({ type: GetClassWithProgramDto })
  class: GetClassWithProgramDto
}
