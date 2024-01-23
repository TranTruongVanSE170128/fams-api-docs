import { ApiResponseProperty } from '@nestjs/swagger'

export class GetStudentClassModuleDto {
  @ApiResponseProperty()
  moduleId: number

  @ApiResponseProperty()
  studentId: number

  @ApiResponseProperty()
  classId: number

  @ApiResponseProperty()
  moduleScore: number

  @ApiResponseProperty()
  moduleLevel: number
}
