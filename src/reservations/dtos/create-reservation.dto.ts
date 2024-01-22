import { ApiProperty } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import { IsDateString, IsInt, IsString, Min } from 'class-validator'

export class CreateReservationDto {
  @ApiProperty()
  @IsInt()
  @Min(1)
  studentId: number

  @ApiProperty()
  @IsInt()
  @Min(1)
  classId: number

  @ApiProperty()
  @IsString()
  reason: string

  @ApiProperty()
  @IsDateString()
  startDate: Date

  @ApiProperty()
  @IsDateString()
  endDate: Date
}
