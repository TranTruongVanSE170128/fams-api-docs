import { ApiResponseProperty } from '@nestjs/swagger'

export class AuthResponseDto {
  @ApiResponseProperty()
  token: string
}
