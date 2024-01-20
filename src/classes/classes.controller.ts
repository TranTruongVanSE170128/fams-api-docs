import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ClassesService } from './classes.service'
import { GetClassDto } from './dtos/get-class.dto'
import { GetClassDetailDto } from './dtos/get-class-detail.dto'

@ApiTags('classes')
@Controller('classes')
export class ClassesController {
  constructor(private classService: ClassesService) {}

  @ApiOperation({ summary: 'Get class detail by classId' })
  @ApiResponse({ status: 200, description: 'Success', type: GetClassDetailDto })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  async getClassDetail(@Param('id') id: number) {
    return await this.classService.getRequiredClassDetailById(Number(id))
  }

  @ApiOperation({
    summary:
      'Get student detail by class, the result will be filtered the suitable module and assignment of the student in this class'
  })
  @ApiParam({ name: 'classId', type: Number })
  @ApiParam({ name: 'studentId', type: Number })
  @Get(':classId/students/:studentId')
  async getStudentDetailByClass(@Param('classId') classId: number, @Param('studentId') studentId: number) {
    //TODO: the result should be filtered the suitable module and assignment of the student in this class
    // return await this.classService.getRequiredClassDetailById(Number(id))
    return {}
  }

  //TODO:Get student detail by class
}
