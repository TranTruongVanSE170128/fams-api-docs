import { ApiResponseProperty } from '@nestjs/swagger'
import { ClassStatus } from '@prisma/client'

export class GetClassDto {
  @ApiResponseProperty()
  id: number

  @ApiResponseProperty()
  className: string

  @ApiResponseProperty()
  startDate: Date

  @ApiResponseProperty()
  endDate: Date

  @ApiResponseProperty()
  createdDate: Date

  @ApiResponseProperty()
  createdUserId: number

  @ApiResponseProperty()
  updatedDate: Date

  @ApiResponseProperty()
  updatedUserId: number

  @ApiResponseProperty()
  duration: string

  @ApiResponseProperty()
  location: string

  @ApiResponseProperty({ enum: ClassStatus })
  status: ClassStatus

  @ApiResponseProperty()
  programId: number
}
