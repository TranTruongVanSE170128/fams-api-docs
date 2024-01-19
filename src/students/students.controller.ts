import { Body, Controller, Post } from '@nestjs/common'
import { StudentsService } from './students.service'
import { CreateStudentDto } from 'src/students/dtos/create-student.dto'
import { ApiOperation } from '@nestjs/swagger'

@Controller('students')
export class StudentsController {
  constructor(private studentService: StudentsService) {}

  @ApiOperation({ summary: 'Create a new user' })
  @Post()
  async insertStudent(@Body() body: CreateStudentDto) {
    return await this.studentService.insertStudent(body)
  }
}
