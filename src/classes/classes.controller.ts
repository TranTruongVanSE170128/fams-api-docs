import { Body, Controller, Get, Param, Patch, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common'
import { ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ClassesService } from './classes.service'
import { GetClassDto } from './dtos/get-class.dto'
import { GetClassDetailDto } from './dtos/get-class-detail.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { ImportStudentsDto } from './dtos/import-students.dto'
import { UpdateStudentAttendingStatusDto } from './dtos/update-students-attending-status.dto'
import { ImportScoresDto } from './dtos/import-score.dto'
import { GetStudentDetailDto } from 'src/students/dtos/get-student-detail.dto'
import { GetClassScoresDto } from './dtos/get-class-scores.dto'
import { UpdateStatusInBatchDto } from './dtos/update-status-in-batch.dto'

@ApiTags('classes')
@Controller('api/classes')
export class ClassesController {
  constructor(private classService: ClassesService) {}

  @ApiOperation({ summary: 'Get class detail by classId' })
  @ApiResponse({ status: 200, description: 'Success', type: GetClassDetailDto })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  async getClassDetail(@Param('id') id: string) {}

  @ApiOperation({
    summary:
      'Get student detail by class, same with /api/students/{id} but the result will be filtered the suitable modules and assignments of the student in this class'
  })
  @ApiResponse({ status: 200, description: 'Success', type: GetStudentDetailDto })
  @ApiParam({ name: 'classId', type: Number })
  @ApiParam({ name: 'studentId', type: Number })
  @Get(':classId/students/:studentId')
  async getStudentDetailByClass(@Param('classId') classId: string, @Param('studentId') studentId: string) {}

  @ApiOperation({ summary: 'Update attendingStatus of many students in class in a request' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiParam({ name: 'id', type: Number })
  @Patch(':id/update-status-in-batch')
  async updateStatusStudentInBatch(@Param('id') id: string, @Body() body: UpdateStatusInBatchDto) {}

  // @ApiOperation({ summary: 'Update the attending status of many students in class who have the same attending status' })
  // @ApiResponse({ status: 200, description: 'Success' })
  // @ApiParam({ name: 'id', type: Number })
  // @Patch(':id/update-students-status')
  // async updateStudentsStatus(@Param('id') id: string, @Body() body: UpdateStudentAttendingStatusDto) {
  //   //TODO
  // }
  // //TODO:3.1.6 loại 2

  @ApiOperation({
    summary: 'Import students to an specified class by template excel file'
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        option: { type: 'string', enum: ['Duplicate', 'Skip', 'Replace'] },
        addStudentsTemplate: {
          type: 'string',
          format: 'binary'
        }
      }
    }
  })
  @UseInterceptors(FileInterceptor('addStudentsTemplate'))
  @Post(':id/add-students-by-excel')
  async ImportStudentsToClass(
    @Param('id') id: string,
    @Body() body: ImportStudentsDto,
    @UploadedFile() addStudentsTemplate
  ) {}

  // @ApiOperation({
  //   summary: 'Import scores to an specified class by template excel file'
  // })
  // @ApiConsumes('multipart/form-data')
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       option: { type: 'string', enum: ['Duplicate', 'Skip', 'Replace'] },
  //       addScoresTemplate: {
  //         type: 'string',
  //         format: 'binary'
  //       }
  //     }
  //   }
  // })
  // @UseInterceptors(FileInterceptor('addScoresTemplate'))
  // @Post(':id/add-scores-by-excel')
  // async ImportScoresToClass(@Param('id') id: string, @Body() body: ImportScoresDto, @UploadedFile() addScoresTemplate) {
  //   //TODO
  //   return {
  //     id,
  //     body,
  //     addScoresTemplate
  //   }
  // }

  // @ApiOperation({ summary: 'Get scores of a class' })
  // @ApiResponse({ status: 200, description: 'Success', type: GetClassScoresDto })
  // @ApiParam({ name: 'id', type: Number })
  // @Get(':id/scores')
  // async getScores(@Param('id') id: string) {
  //   // return await this.classService.getRequiredClassDetailById(Number(id))
  // }
}
