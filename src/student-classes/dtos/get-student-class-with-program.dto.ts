import { ApiResponseProperty } from '@nestjs/swagger'
import { AttendingStatus, CertificateStatus } from '@prisma/client'
import { GetClassWithProgram } from 'src/classes/dtos/get-class-with-program.dto'

export class GetStudentClassWithProgramDto {
  @ApiResponseProperty()
  classId: number

  @ApiResponseProperty()
  studentId: number

  @ApiResponseProperty({ enum: AttendingStatus })
  attendingStatus: AttendingStatus

  @ApiResponseProperty({ enum: CertificateStatus })
  certificateStatus: CertificateStatus

  @ApiResponseProperty()
  certificateDate: Date

  @ApiResponseProperty({ type: GetClassWithProgram })
  class: GetClassWithProgram
}
