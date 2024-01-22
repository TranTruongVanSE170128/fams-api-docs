import { ApiProperty } from '@nestjs/swagger'
import { IsInt, Min } from 'class-validator'

export class ReClassDto {
  @ApiProperty()
  @IsInt()
  @Min(1)
  studentId: number

  @ApiProperty()
  @IsInt()
  @Min(1)
  classId: number

  @ApiProperty()
  @IsInt()
  @Min(1)
  newClassId: number
}
