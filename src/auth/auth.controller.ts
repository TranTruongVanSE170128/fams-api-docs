import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AuthResponseDto } from './dtos/auth-response.dto'
import { LoginDto } from './dtos/login.dto'
import { RegisterDto } from './dtos/register.dto'
import { GetUserDto } from 'src/users/dtos/get-user.dto'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  @ApiOperation({ summary: 'Get class detail by classId' })
  @ApiResponse({ status: 200, description: 'Success', type: AuthResponseDto })
  @Post('login')
  async login(@Body() body: LoginDto) {}

  @ApiOperation({ summary: 'Get class detail by classId' })
  @ApiResponse({ status: 200, description: 'Success' })
  @Post('register')
  async register(@Body() body: RegisterDto) {}

  @ApiOperation({ summary: 'Identify current user if they have token' })
  @ApiResponse({ status: 200, description: 'Success', type: GetUserDto })
  @Get('who-am-i')
  async whoAmI() {}
}
