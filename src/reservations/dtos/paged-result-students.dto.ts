import { ApiResponseProperty } from '@nestjs/swagger'
import { GetReservationDetailDto } from './get-reservation-detail.dto'

export class PagedResultReservation {
  @ApiResponseProperty()
  totalCount: number

  @ApiResponseProperty()
  pageNumber: number

  @ApiResponseProperty()
  pageSize: number

  @ApiResponseProperty({ type: [GetReservationDetailDto] })
  items: GetReservationDetailDto[]
}
