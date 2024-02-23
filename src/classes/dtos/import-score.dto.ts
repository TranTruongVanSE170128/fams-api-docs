import { ApiProperty } from '@nestjs/swagger'
import { Gender } from '@prisma/client'
import { IsIn } from 'class-validator'

export class ImportScoresDto {
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
