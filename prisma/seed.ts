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

  await prisma.student.create({
    data: {
      id: 1,
      phone: '0933131464',
      email: 'kingchenobama711@gmail.com',
      fullName: 'Trần Trương Văn',
      gender: 'Male',
      major: 'Software Engineering',
      dob: '2003-11-07T17:16:37.286Z',
      gpa: 8,
      university: 'FPT HCM',
      classCode: 1,
      status: 'Active',
      joinedDate: new Date()
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
