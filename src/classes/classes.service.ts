import { Injectable, NotFoundException } from '@nestjs/common'
import { Class } from '@prisma/client'
import { NotFoundError } from 'rxjs'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) {}

  async getRequiredClassById(id: number): Promise<Class | null> {
    const result = await this.prisma.class.findUnique({
      where: {
        id
      }
    })

    if (result) {
      return result
    }

    throw new NotFoundException('Could not find class')
  }

  async getRequiredClassDetailById(id: number): Promise<Class | null> {
    const result = await this.prisma.class.findUnique({
      where: {
        id
      },
      include: {
        students: true,
        createdUser: true,
        managers: true,
        reservations: true,
        program: true,
        studentClasses: true,
        updatedUser: true
      }
    })

    if (result) {
      return result
    }

    throw new NotFoundException('Could not find class')
  }
}
