import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.user.createMany({
    data: [
      {
        id: 1,
        role: 'SuperAdmin',
        fullName: 'Nguyễn Thị Siêu Admin'
      },
      {
        id: 2,
        role: 'SuperAdmin',
        fullName: 'Trần Super Admin'
      }
    ]
  })

  await prisma.program.createMany({
    data: [
      {
        id: 1,
        programName: 'ASP NET CORE 2024',
        createdUserId: 1
      },
      {
        id: 2,
        programName: 'The Ultimate React Complete Guide',
        createdUserId: 2
      },
      {
        id: 3,
        programName: 'Software Testing Bootcamp',
        createdUserId: 1
      }
    ]
  })

  await prisma.class.createMany({
    data: [
      {
        id: 1,
        className: 'NET_01',
        duration: '25 days (75 hours)',
        location: 'Hồ Chí Minh',
        startDate: '2023-12-25T00:00:00.000Z',
        status: 'Active',
        createdDate: '2023-12-13T00:00:00.000Z',
        createdUserId: 1,
        programId: 1
      },
      {
        id: 2,
        className: 'REACT_01',
        duration: '28 days (84 hours)',
        location: 'Hà Nội',
        startDate: '2024-01-25T00:00:00.000Z',
        status: 'Active',
        createdDate: '2023-12-31T00:00:00.000Z',
        createdUserId: 2,
        programId: 2
      },
      {
        id: 3,
        className: 'TEST_01',
        duration: '15 days (45 hours)',
        location: 'Đà Nẵng',
        startDate: '2024-01-15T00:00:00.000Z',
        status: 'Active',
        createdDate: '2023-12-17T00:00:00.000Z',
        createdUserId: 1,
        programId: 3
      }
    ]
  })

  await prisma.student.createMany({
    data: [
      {
        id: 1,
        phone: '0933131464',
        email: 'kingchenobama711@gmail.com',
        fullName: 'Trần Trương Văn',
        gender: 'Male',
        major: 'Software Engineering',
        dob: '2003-11-07T00:00:00.000Z',
        gpa: 8.1,
        university: 'FPT HCM',
        classCode: 1,
        status: 'Active',
        joinedDate: '2024-08-01T00:00:00.000Z',
        address: 'phường Phú Hữu, quận 9, thành phố Hồ Chí Minh',
        reCer: 'Admin NTS',
        graduatedDate: 2020
      },
      {
        id: 2,
        phone: '0938123456',
        email: 'nguyenminhanh123@gmail.com',
        fullName: 'Nguyễn Minh Anh',
        gender: 'Female',
        major: 'Computer Science',
        dob: '2002-04-15T00:00:00.000Z',
        gpa: 7.9,
        university: 'ĐH Khoa học Tự Nhiên TP.HCM',
        classCode: 2,
        status: 'Active',
        joinedDate: '2024-01-02T00:00:00.000Z',
        address: 'phường Phú Mỹ, quận 7, thành phố Hồ Chí Minh',
        reCer: 'Admin TS',
        graduatedDate: 2021
      },
      {
        id: 3,
        phone: '0934567890',
        email: 'lehoangviet456@gmail.com',
        fullName: 'Lê Hoàng Việt',
        gender: 'Male',
        major: 'Information Technology',
        dob: '2001-12-20T00:00:00.000Z',
        gpa: 8.4,
        university: 'Đại học Bách Khoa TP.HCM',
        classCode: 3,
        status: 'Active',
        joinedDate: '2024-01-05T00:00:00.000Z',
        address: 'phường Bến Nghé, quận 1, thành phố Hồ Chí Minh',
        reCer: 'Admin TS',
        graduatedDate: 2022
      },
      {
        id: 4,
        phone: '0939876543',
        email: 'tranthikimtuyen789@gmail.com',
        fullName: 'Trần Thị Kim Tuyến',
        gender: 'Female',
        major: 'Data Science',
        dob: '2003-07-22T00:00:00.000Z',
        gpa: 7.8,
        university: 'ĐH Quốc Gia TP.HCM',
        classCode: 2,
        status: 'Active',
        joinedDate: '2024-01-07T00:00:00.000Z',
        address: 'phường Võ Thị Sáu, quận 3, thành phố Hồ Chí Minh',
        reCer: 'Admin NTS',
        graduatedDate: 2021
      }
    ]
  })

  await prisma.studentClass.createMany({
    data: [
      {
        studentId: 1,
        classId: 1,
        attendingStatus: 'InClass',
        certificateStatus: 'Disable'
      },
      {
        studentId: 2,
        classId: 2,
        attendingStatus: 'InClass',
        certificateStatus: 'Disable'
      },
      {
        studentId: 3,
        classId: 3,
        attendingStatus: 'InClass',
        certificateStatus: 'Disable'
      },
      {
        studentId: 4,
        classId: 2,
        attendingStatus: 'InClass',
        certificateStatus: 'Disable'
      }
    ]
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
