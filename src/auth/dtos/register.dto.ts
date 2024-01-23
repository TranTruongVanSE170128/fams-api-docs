import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, Matches } from 'class-validator'

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
}
