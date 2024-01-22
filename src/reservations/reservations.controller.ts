import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ReservationsService } from './reservations.service'
import { CreateReservationDto } from './dtos/create-reservation.dto'
import { PagedResultReservation } from './dtos/paged-result-students.dto'
import { DropClassDto } from './dtos/drop-class.dto'
import { ReClassDto } from './dtos/re-class.dto'

@ApiTags('reservations')
@Controller('/api/reservations')
export class ReservationsController {
  constructor(private reservationService: ReservationsService) {}

  @ApiResponse({ status: 200, description: 'Success', type: PagedResultReservation })
  @ApiOperation({ summary: 'get students reservation' })
  @ApiQuery({ name: 'pageSize', type: Number, required: false, description: 'default 10' })
  @ApiQuery({ name: 'pageNumber', type: Number, required: false, description: 'default 1' })
  @ApiQuery({ name: 'searchQuery', type: String, required: false })
  @Get()
  async getReservations(@Query() pageSize: number, @Query() pageNumber: number, @Query() searchQuery: string) {
    return await this.reservationService.getReservations()
  }

  @ApiResponse({ status: 200, description: 'Success' })
  @ApiOperation({ summary: 'add reservation' })
  @Post()
  async createReservation(@Body() body: CreateReservationDto) {
    await this.reservationService.createReservation(body)
  }

  @ApiResponse({ status: 200, description: 'Success' })
  @ApiOperation({ summary: 'drop class student from class' })
  @Post('drop-class')
  async dropClass(@Body() body: DropClassDto) {
    // await this.reservationService.createReservation(body)
  }

  @ApiResponse({ status: 200, description: 'Success' })
  @ApiOperation({ summary: 'assign a new class for reservation student' })
  @Post('re-class')
  async reClass(@Body() body: ReClassDto) {
    // await this.reservationService.createReservation(body)
  }
}
