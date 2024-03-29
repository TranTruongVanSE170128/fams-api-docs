import { ApiResponseProperty } from '@nestjs/swagger'
import { AttendingStatus, CertificateStatus, GpaLevel, Result } from '@prisma/client'

export class GetStudentClassDto {
  @ApiResponseProperty()
  classId: number

  @ApiResponseProperty()
  studentId: number

  @ApiResponseProperty({ enum: AttendingStatus })
  attendingStatus: AttendingStatus

  @ApiResponseProperty({ enum: Result })
  Result: AttendingStatus

  @ApiResponseProperty()
  FinalScore: number

  @ApiResponseProperty({ enum: GpaLevel })
  GpaLevel: GpaLevel

  @ApiResponseProperty({ enum: CertificateStatus })
  certificateStatus: CertificateStatus

  @ApiResponseProperty()
  certificateDate: Date
}
