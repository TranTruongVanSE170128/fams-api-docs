import { ClassStatus, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.user.create({
    data: {
      id: 1,
      role: 'SuperAdmin'
    }
  })

  await prisma.program.create({
    data: {
      id: 1
    }
  })

  await prisma.class.create({
    data: {
      id: 1,
      className: 'NET_01',
      duration: '25 days (75hours)',
      location: 'Hồ Chí Minh',
      startDate: new Date(),
      status: 'Active',
      createdDate: new Date(),
      createdUserId: 1,
      programId: 1
    }
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
