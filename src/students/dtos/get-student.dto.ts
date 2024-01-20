import { ApiResponse, ApiResponseProperty } from '@nestjs/swagger'
import { Gender, StudentStatus } from '@prisma/client'

export class GetStudentDto {
  @ApiResponseProperty()
  id: number

  @ApiResponseProperty()
  phone: string

  @ApiResponseProperty()
  email: string

  @ApiResponseProperty()
  fullName: string

  @ApiResponseProperty({ enum: Gender })
  gender: Gender

  @ApiResponseProperty()
  major: string

  @ApiResponseProperty()
  dob: Date

  @ApiResponseProperty()
  graduatedDate: number

  @ApiResponseProperty()
  gpa: number

  @ApiResponseProperty()
  address: string

  @ApiResponseProperty({ enum: StudentStatus })
  status: StudentStatus

  @ApiResponseProperty()
  reCer: string

  @ApiResponseProperty()
  joinedDate: Date

  @ApiResponseProperty()
  university: string

  @ApiResponseProperty()
  classCode: number
}
