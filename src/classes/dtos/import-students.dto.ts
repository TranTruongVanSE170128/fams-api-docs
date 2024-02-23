import { ApiProperty } from '@nestjs/swagger'
import { IsIn } from 'class-validator'

export class ImportStudentsDto {
  @ApiProperty({
    enum: {
      Duplicate: 'Duplicate',
      Skip: 'Skip',
      Replace: 'Replace'
    }
  })
  @IsIn(['Duplicate', 'Skip', 'Replace'], { message: 'Option should be Duplicate, Skip, or Replace' })
  option: string
}
