import { ApiPropertyOptional } from '@nestjs/swagger'
import { StudentStatus } from '@prisma/client'

export class QueryStudentsDto {
  @ApiPropertyOptional()
  pageSize?: number

  @ApiPropertyOptional()
  pageNumber?: number

  @ApiPropertyOptional()
  searchQuery?: string

  @ApiPropertyOptional()
  status?: StudentStatus
}
