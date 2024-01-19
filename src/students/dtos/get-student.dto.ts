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

  @ApiResponseProperty()
  gender: Gender

  @ApiResponseProperty()
  major: string

  //   @ApiResponseProperty()
  //   dob: DateTime

  //   @ApiResponseProperty()
  //   graduatedDate: DateTime

  @ApiResponseProperty()
  gpa: number

  @ApiResponseProperty()
  address: string

  @ApiResponseProperty()
  status: StudentStatus

  @ApiResponseProperty()
  reCer: string

  //   @ApiResponseProperty()
  //   joinedDate: DateTime

  @ApiResponseProperty()
  university: string

  @ApiResponseProperty()
  classCode: number
}
