import { ApiResponseProperty } from '@nestjs/swagger'

export class GetReservationDto {
  @ApiResponseProperty()
  id: number

  @ApiResponseProperty()
  classId: number

  @ApiResponseProperty()
  studentId: number
}
