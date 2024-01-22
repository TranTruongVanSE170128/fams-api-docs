import { ApiResponseProperty } from '@nestjs/swagger'

export function getProperty(className: any): string[] {
  return Object.getOwnPropertyNames(className).filter((prop) => {
    return typeof className[prop] !== 'function'
  })
}

export function inWithin6Months(startDate: Date, endDate: Date) {
  const startTime = new Date(startDate).getTime()
  const endTime = new Date(endDate).getTime()

  const khoangThoiGian = endTime - startTime

  const sixMonthsInMilliseconds = 180 * 24 * 60 * 60 * 1000

  return khoangThoiGian <= sixMonthsInMilliseconds && endTime > startTime
}
