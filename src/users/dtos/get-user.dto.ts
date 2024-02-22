import { ApiResponseProperty } from '@nestjs/swagger'
import { Gender, Role } from '@prisma/client'

export class GetUserDto {
  @ApiResponseProperty()
  id: number

  @ApiResponseProperty({ enum: Role })
  role: Role

  @ApiResponseProperty()
  fullName: string

  @ApiResponseProperty({ enum: Gender })
  gender: string

  @ApiResponseProperty()
  email: string
}
