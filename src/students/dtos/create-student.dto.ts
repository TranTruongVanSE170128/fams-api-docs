import { ApiProperty } from '@nestjs/swagger'
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

  @ApiProperty()
  @IsIn(['Male', 'Female'], { message: 'Invalid gender' })
  gender: Gender

  @ApiProperty()
  @IsOptional()
  @IsString()
  major: string

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  dob: Date

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  graduatedDate: Date

  @ApiProperty()
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 1 })
  gpa: number

  @ApiProperty()
  @IsOptional()
  @IsString()
  address: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  reCer: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  university: string

  @ApiProperty()
  @IsInt()
  @Min(1)
  classCode: number
}
