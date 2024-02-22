import { ApiResponseProperty } from '@nestjs/swagger'
import { GetUserDto } from 'src/users/dtos/get-user.dto'

export class GetProgramDto {
  @ApiResponseProperty()
  id: number

  @ApiResponseProperty()
  programName: string

  @ApiResponseProperty()
  status: string

  @ApiResponseProperty()
  code: string

  @ApiResponseProperty()
  duration: string

  @ApiResponseProperty()
  createdDate: Date

  @ApiResponseProperty()
  createdUserId: string

  @ApiResponseProperty()
  updatedDate: Date

  @ApiResponseProperty()
  updatedUserId: string

  @ApiResponseProperty({ type: GetUserDto })
  createdUser: string

  @ApiResponseProperty({ type: GetUserDto })
  updatedUser: string
}
