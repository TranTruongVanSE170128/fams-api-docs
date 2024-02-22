import { ApiResponseProperty } from '@nestjs/swagger'
import { AttendingStatus, CertificateStatus, GpaLevel, Result } from '@prisma/client'
import { GetStudentDto } from 'src/students/dtos/get-student.dto'

export class GetStudentClassWithStudentDto {
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

  @ApiResponseProperty({ type: GetStudentDto })
  student: GetStudentDto
}
