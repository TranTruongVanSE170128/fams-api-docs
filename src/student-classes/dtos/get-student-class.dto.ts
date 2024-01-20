import { ApiResponseProperty } from '@nestjs/swagger'
import { AttendingStatus, CertificateStatus } from '@prisma/client'

export class GetStudentClassDto {
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
}
