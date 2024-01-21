import { ApiResponseProperty } from '@nestjs/swagger'
import { ClassStatus, Program, User } from '@prisma/client'
import { GetProgramDto } from 'src/programs/dtos/get-program.dto'

export class GetClassWithProgram {
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

  @ApiResponseProperty({ type: GetProgramDto })
  program: Program
}
