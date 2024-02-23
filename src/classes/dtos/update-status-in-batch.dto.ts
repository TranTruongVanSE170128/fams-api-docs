import { ApiProperty } from '@nestjs/swagger'
import { AttendingStatus } from '@prisma/client'
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsIn, IsInt } from 'class-validator'

export class UpdateStatusInBatchDto {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @IsInt({ each: true })
  studentIdList: number[]

  @ApiProperty({ enum: AttendingStatus })
  @IsIn(['InClass', 'Reserve', 'Finish', 'DropOut'], {
    message: 'Option should be InClass, Reserve, Finish or DropOut'
  })
  attendingStatus: string
}
