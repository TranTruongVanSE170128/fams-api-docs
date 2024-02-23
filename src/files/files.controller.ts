import { Controller, Get, Res } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import * as path from 'path'

@ApiTags('files')
@Controller('/api/files')
export class FilesController {
  @ApiOperation({
    summary:
      'Just access this endpoint by <Link href="/api/files/student-template"></Link>, then you get student-template.xlsx'
  })
  @Get('student-template')
  getAddStudentsTemplate(@Res() res: Response) {
    // const xlsxFilePath = path.join(__dirname, '../../public/student-template.xlsx')
    // // Thiết lập header cho response để browser hiểu rằng đây là một file tải về
    // res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    // res.setHeader('Content-Disposition', 'attachment; filename=student-template.xlsx')
    // // Đọc file XLSX và ghi nó vào response
    // res.sendFile(xlsxFilePath)
  }

  // @ApiOperation({
  //   summary:
  //     'Just access this endpoint by <Link href="/api/files/add-scores-template"></Link>, then you get add-scores-template.xlsx'
  // })
  // @Get('add-scores-template')
  // getAddScoresTemplate(@Res() res: Response) {
  //   const xlsxFilePath = path.join(__dirname, '../../public/add-scores-template.xlsx')

  //   // Thiết lập header cho response để browser hiểu rằng đây là một file tải về
  //   res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  //   res.setHeader('Content-Disposition', 'attachment; filename=add-scores-template.xlsx')

  //   // Đọc file XLSX và ghi nó vào response
  //   res.sendFile(xlsxFilePath)
  // }
}
