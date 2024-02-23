import { ApiProperty } from '@nestjs/swagger'
import { AttendingStatus } from '@prisma/client'
import { IsIn } from 'class-validator'

export class UpdateStudentAttendingStatusDto {
  @ApiProperty({ enum: AttendingStatus })
  @IsIn(['InClass', 'Reserve', 'Finish', 'DropOut'], {
    message: 'The attendingStatus should be InClass, Reserve, Finish, or DropOut'
  })
  attendingStatus: AttendingStatus

  @ApiProperty({ type: [Number] })
  studentIds: number[]
}
