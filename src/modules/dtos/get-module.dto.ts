import { ApiResponseProperty } from '@nestjs/swagger'

export class GetModuleDto {
  @ApiResponseProperty()
  id: number

  @ApiResponseProperty()
  moduleName: number

  @ApiResponseProperty()
  createdDate: Date

  @ApiResponseProperty()
  createdUserId: number

  @ApiResponseProperty()
  updatedDate: Date

  @ApiResponseProperty()
  updatedUserId: number
}
