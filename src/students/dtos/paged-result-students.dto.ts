import { ApiResponseProperty } from '@nestjs/swagger'
import { Student } from '@prisma/client'
import { GetStudentDto } from './get-student.dto'

export class PagedResultStudent {
  @ApiResponseProperty()
  totalCount: number

  @ApiResponseProperty()
  pageNumber: number

  @ApiResponseProperty()
  pageSize: number

  @ApiResponseProperty({ type: [GetStudentDto] })
  items: Student[]
}
