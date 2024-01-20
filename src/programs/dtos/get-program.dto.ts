import { ApiResponseProperty } from '@nestjs/swagger'

export class GetProgramDto {
  @ApiResponseProperty()
  id: number
}
