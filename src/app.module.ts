import { Module } from '@nestjs/common'

import { StudentsController } from './students/students.controller'
import { StudentsService } from './students/students.service'
import { PrismaService } from './prisma.service'

@Module({
  imports: [],
  controllers: [StudentsController],
  providers: [StudentsService, PrismaService]
})
export class AppModule {}
