export let role = 'admin'

export const teachersData = [
  {  // 10 needed
    id: 1,
    teacherId: '2024202507',
    name: 'Michael David Forbes',
    email: 'mdforbes@sch.com',
    photo: '/images/',
    phone: '01217338674',
    subjects: ['Maths', 'Geometry'],
    classes: ['1B', '2A', '3C'],
    address: '23 Bridge Street, Coventry, West Midlands'
  }
]

export const studentData = [
  {  // 10 needed
    id: 1,
    studentId: '2425936594',
    name: 'Kimberley Helena Shaw',
    email: 'khshaw@sch.com',
    photo: '/images/',
    phone: '01219373759',
    grade: 5,
    classes: '1B',
    address: '6 Main Lane, Birmingham, West Midlands'
  }
]

export const parentsData = [
  {  // 10 needed
    id: 1,
    name: 'Thomas Graham Shaw',
    students: ['Kimberley Helena Shaw'],
    email: 'tgshaw@par.com',
    phone: '01219373759',
    address: '6 Main Lane, Birmingham, West Midlands'
  }
]

export const subjectsData = [
  {  // 10 needed
    id: 1,
    name: 'Maths',
    teachers: ['Michael David Forbes'],
  }
]

export const classesData = [
  {  // 10 needed
    id: 1,
    name: '1A',
    capacity: 27,
    grade: 1,
    formTeacher: ['Michael David Forbes'],
  }
]

export const lessonsData = [
  {  // 10 needed
    id: 1,
    subject: 'Maths',
    class: '1A',
    teachers: ['Michael David Forbes'],
  }
]