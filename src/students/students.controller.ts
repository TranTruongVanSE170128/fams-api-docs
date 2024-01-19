import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { StudentsService } from './students.service'
import { CreateStudentDto } from 'src/students/dtos/create-student.dto'
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { GetStudentDto } from './dtos/get-student.dto'
import { StudentStatus } from '@prisma/client'
import { getProperty } from 'src/utils'

@ApiTags('students')
@Controller('students')
export class StudentsController {
  constructor(private studentService: StudentsService) {}

  @ApiOperation({ summary: 'Get students' })
  @ApiResponse({ status: 200, description: 'Success', type: [GetStudentDto] })
  @ApiQuery({ name: 'pageSize', type: Number, required: false })
  @ApiQuery({ name: 'pageNumber', type: Number, required: false })
  @ApiQuery({ name: 'searchQuery', type: String, required: false })
  @ApiQuery({ name: 'status', type: String, enum: StudentStatus, required: false })
  @Get()
  async getStudents(
    @Query() pageSize: number,
    @Query() pageNumber: number,
    @Query() searchQuery: string,
    @Query() status: StudentStatus
  ) {
    return await this.studentService.getStudents()
  }

  @ApiOperation({ summary: 'Create a new user' })
  @Post()
  async insertStudent(@Body() body: CreateStudentDto): Promise<GetStudentDto> {
    return (await this.studentService.insertStudent(body)) as GetStudentDto
  }
}
