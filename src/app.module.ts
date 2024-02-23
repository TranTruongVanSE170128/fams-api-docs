import { Module } from '@nestjs/common'

import { StudentsController } from './students/students.controller'
import { StudentsService } from './students/students.service'
import { PrismaService } from './prisma.service'
import { ClassesController } from './classes/classes.controller'
import { ClassesService } from './classes/classes.service'
import { StudentClassesService } from './student-classes/student-classes.service'
import { ReservationsService } from './reservations/reservations.service'
import { UsersService } from './users/users.service'
import { ProgramsService } from './programs/programs.service'
import { FilesController } from './files/files.controller'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { MulterModule } from '@nestjs/platform-express'
import { ReservationsController } from './reservations/reservations.controller'
import { AuthController } from './auth/auth.controller'
import { AppController } from './app.controller'

@Module({
  // imports: [
  //   ServeStaticModule.forRoot({
  //     rootPath: join(__dirname, '..', 'public')
  //   })
  // ],
  imports: [
    MulterModule.register({
      dest: './uploads' // Destination directory for temporarily storing files (you can change this)
    })
  ],
  controllers: [
    StudentsController,
    ClassesController,
    FilesController,
    ReservationsController,
    AuthController,
    AppController
  ],
  providers: [
    StudentsService,
    PrismaService,
    ClassesService,
    StudentClassesService,
    ReservationsService,
    UsersService,
    ProgramsService
  ]
})
export class AppModule {}
