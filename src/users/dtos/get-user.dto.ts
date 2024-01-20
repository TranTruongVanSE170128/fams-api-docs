import { ApiResponseProperty } from '@nestjs/swagger'
import { Role } from '@prisma/client'

export class GetUserDto {
  @ApiResponseProperty()
  id: number

  @ApiResponseProperty({ enum: Role })
  role: Role

  @ApiResponseProperty()
  fullName: string
}
