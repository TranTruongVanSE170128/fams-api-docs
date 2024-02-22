import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { StudentsService } from './students.service'
import { CreateStudentDto } from 'src/students/dtos/create-student.dto'
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { GetStudentDto } from './dtos/get-student.dto'
import { AttendingStatus, StudentStatus } from '@prisma/client'
import { GetStudentDetailDto } from './dtos/get-student-detail.dto'
import { UpdateStudentDto } from './dtos/update-student.dto'
import { PagedResultStudent } from './dtos/paged-result-students.dto'
import { query } from 'express'
import { QueryStudentsDto } from './dtos/query-students.dto'

@ApiTags('students')
@Controller('/api/students')
export class StudentsController {
  constructor(private studentService: StudentsService) {}

  @ApiOperation({ summary: 'Get students' })
  @ApiResponse({ status: 200, description: 'Success', type: PagedResultStudent })
  @ApiQuery({ name: 'pageSize', type: Number, required: false, description: 'default 10' })
  @ApiQuery({ name: 'pageNumber', type: Number, required: false, description: 'default 1' })
  @ApiQuery({ name: 'searchQuery', type: String, required: false })
  @ApiQuery({ name: 'status', type: String, enum: StudentStatus, required: false })
  @Get()
  async getStudents(@Query() query) {
    return await this.studentService.getStudents({
      ...query,
      pageNumber: Number(query.pageNumber) || 1,
      pageSize: Number(query.pageSize) || 10
    })
  }

  @ApiOperation({ summary: 'Get student detail by studentId' })
  @ApiResponse({ status: 200, description: 'Success', type: GetStudentDetailDto })
  @Get(':id')
  async getStudentDetail(@Param('id') id: string) {
    return await this.studentService.getRequiredStudentDetailById(Number(id))
  }

  @ApiOperation({
    summary: 'Create a new student. Class code is required and the student will be assigned in that class.'
  })
  @ApiResponse({ status: 200, description: 'Success', type: GetStudentDto })
  @Post()
  async insertStudent(@Body() body: CreateStudentDto) {
    return await this.studentService.insertStudent(body)
  }

  @ApiOperation({ summary: 'Update basic information a student' })
  @ApiResponse({ status: 200, description: 'Success', type: GetStudentDto })
  @Patch(':id')
  async updateStudent(@Param('id') id: string, @Body() body: UpdateStudentDto) {
    return await this.studentService.updateStudent(Number(id), body)
  }
}
