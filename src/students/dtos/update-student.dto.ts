import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Gender } from '@prisma/client'
import {
  IsDateString,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  Max,
  Min,
  MinLength
} from 'class-validator'

export class UpdateStudentDto {
  @ApiPropertyOptional()
  @Matches(/^(\+84|0)[1-9]\d{8}$/, {
    message: "Invalid phone number. It should be in the format '+84xxxxxxxxx' or '0xxxxxxxxx'."
  })
  @IsOptional()
  phone?: string

  @ApiPropertyOptional()
  @MinLength(2, { message: 'Invalid full name' })
  @IsOptional()
  fullName?: string

  @ApiPropertyOptional({ enum: Gender })
  @IsIn(['Male', 'Female'], { message: 'Invalid gender' })
  @IsOptional()
  gender?: Gender

  @ApiPropertyOptional()
  @IsString({ message: 'Invalid major' })
  @IsOptional()
  major?: string

  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  dob?: Date

  @ApiPropertyOptional()
  @IsInt({ message: 'Invalid major' })
  @Min(1900)
  @Max(new Date().getFullYear())
  @IsOptional()
  graduatedDate?: number

  @ApiPropertyOptional()
  @IsNumber({ maxDecimalPlaces: 1 })
  @IsOptional()
  gpa?: number

  @ApiPropertyOptional()
  @IsString({ message: 'Invalid gender' })
  @IsOptional()
  address?: string

  @ApiPropertyOptional()
  @IsString({ message: 'Invalid gender' })
  @IsOptional()
  reCer?: string

  @ApiPropertyOptional()
  @IsString({ message: 'Invalid gender' })
  @IsOptional()
  university?: string
}
