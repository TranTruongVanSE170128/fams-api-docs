import { ApiProperty } from '@nestjs/swagger'
import { Gender, Role } from '@prisma/client'
import { IsEmail, IsString, Matches, MinLength } from 'class-validator'

export class RegisterDto {
  @ApiProperty()
  @IsEmail()
  email: string

  @ApiProperty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/, {
    message:
      'Password minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:'
  })
  password: string

  @ApiProperty({ enum: ['SuperAdmin', 'ClassAdmin', 'Trainer'] })
  role: Role

  @ApiProperty({ enum: ['Male', 'Female'] })
  gender: Gender

  @ApiProperty()
  @IsString()
  @MinLength(2)
  fullName: string
}
