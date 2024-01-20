import { ApiProperty } from '@nestjs/swagger'
import { IsIn } from 'class-validator'

export class ImportStudentsDto {
  @ApiProperty()
  @IsIn(['Duplicate', 'Skip', 'Replace'], { message: 'Option should be Duplicate, Skip, or Replace' })
  option: string
}
