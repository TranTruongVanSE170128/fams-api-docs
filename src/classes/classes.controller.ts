import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ClassesService } from './classes.service'
import { GetClassDto } from './dtos/get-class.dto'
import { GetClassDetailDto } from './dtos/get-class-detail.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { ImportStudentsDto } from './dtos/import-students.dto'

@ApiTags('classes')
@Controller('api/classes')
export class ClassesController {
  constructor(private classService: ClassesService) {}

  @ApiOperation({ summary: 'Get class detail by classId' })
  @ApiResponse({ status: 200, description: 'Success', type: GetClassDetailDto })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  async getClassDetail(@Param('id') id: string) {
    return await this.classService.getRequiredClassDetailById(Number(id))
  }

  @ApiOperation({
    summary:
      'Get student detail by class, the result will be filtered the suitable module and assignment of the student in this class'
  })
  @ApiParam({ name: 'classId', type: Number })
  @ApiParam({ name: 'studentId', type: Number })
  @Get(':classId/students/:studentId')
  async getStudentDetailByClass(@Param('classId') classId: string, @Param('studentId') studentId: string) {
    //TODO: the result should be filtered the suitable module and assignment of the student in this class
    // return await this.classService.getRequiredClassDetailById(Number(id))
    return {}
  }

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
  ) {
    //TODO
    return {
      id,
      body,
      addStudentsTemplate
    }
  }
}
