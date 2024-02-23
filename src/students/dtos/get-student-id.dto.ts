import { ApiResponseProperty } from '@nestjs/swagger'

export class GetStudentIdDto {
  @ApiResponseProperty()
  id: number
}
