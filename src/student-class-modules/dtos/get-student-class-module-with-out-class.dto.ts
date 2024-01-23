import { ApiResponseProperty } from '@nestjs/swagger'
import { GetModuleDto } from 'src/modules/dtos/get-module.dto'
import { GetStudentDto } from 'src/students/dtos/get-student.dto'

export class GetStudentClassModuleWithOutClassDto {
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

  @ApiResponseProperty({ type: GetStudentDto })
  student: GetStudentDto

  @ApiResponseProperty({ type: GetModuleDto })
  module: GetModuleDto
}
