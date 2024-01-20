import { Module } from '@nestjs/common'

import { StudentsController } from './students/students.controller'
import { StudentsService } from './students/students.service'
import { PrismaService } from './prisma.service'
import { ClassesController } from './classes/classes.controller';
import { ClassesService } from './classes/classes.service';
import { StudentClassesService } from './student-classes/student-classes.service';
import { ReservationsService } from './reservations/reservations.service';
import { UsersService } from './users/users.service';
import { ProgramsService } from './programs/programs.service';

@Module({
  imports: [],
  controllers: [StudentsController, ClassesController],
  providers: [StudentsService, PrismaService, ClassesService, StudentClassesService, ReservationsService, UsersService, ProgramsService]
})
export class AppModule {}
