import { ApiResponseProperty } from '@nestjs/swagger'

export class GetAssignmentDto {
  @ApiResponseProperty()
  id: number

  @ApiResponseProperty()
  moduleId: number

  @ApiResponseProperty()
  assignmentName: string

  @ApiResponseProperty()
  assignmentType: string

  @ApiResponseProperty()
  description: string

  @ApiResponseProperty()
  createdDate: Date

  @ApiResponseProperty()
  createdUserId: number

  @ApiResponseProperty()
  updatedDate: Date

  @ApiResponseProperty()
  updatedUserId?: number
}
