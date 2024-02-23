import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Gender } from '@prisma/client'
import {
  IsDate,
  IsDateString,
  IsDecimal,
  IsEmail,
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
import { Transform } from 'class-transformer'

export class CreateStudentDto {
  @ApiProperty()
  @Matches(/^0\d{9}$/, {
    message: 'Invalid phone number'
  })
  phone: string

  @ApiProperty()
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase().trim())
  email: string

  @ApiProperty()
  @MinLength(2, { message: 'Invalid full name' })
  fullName: string

  @ApiProperty({ enum: Gender })
  @IsIn(['Male', 'Female'], { message: 'Invalid gender' })
  gender: Gender

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  major: string

  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  dob: Date

  @ApiPropertyOptional()
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  @IsOptional()
  graduatedDate: number

  @ApiPropertyOptional()
  @IsNumber({ maxDecimalPlaces: 1 })
  @IsOptional()
  gpa: number

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  address: string

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  reCer: string

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  university: string

  @ApiProperty()
  @IsInt()
  @Min(1)
  classCode: number
}
