const Menu = () => {
  return (
    <div>
      Menu
    </div>
  )
}

export default Menu





const menuItems = [
  {
    title: 'MENU',
    items: [
      { 
        icon: '/home.png',
        label: 'Home',
        href: '/',
        visibile: [
          'admin',
          'teacher',
          'student',
          'parent',
        ],
      },
      { 
        icon: '/teacher.png',
        label: 'Teachers',
        href: '/list/teachers',
        visibile: [
          'admin',
          'teacher',
        ],
      },
      { 
        icon: '/students.png',
        label: 'Students',
        href: '/list/students',
        visibile: [
          'admin',
          'teacher',
        ],
      },
      { 
        icon: '/parent.png',
        label: 'Parents',
        href: '/list/parents',
        visibile: [
          'admin',
          'teacher',
        ],
      },
      { 
        icon: '/subject.png',
        label: 'Subjects',
        href: '/list/subjects',
        visibile: [
          'admin'
        ],
      },
      { 
        icon: '/class.png',
        label: 'Classes',
        href: '/list/classes',
        visibile: [
          'admin',
          'teacher'
        ],
      },
      { 
        icon: '/lesson.png',
        label: 'Lessons',
        href: '/list/lessons',
        visibile: [
          'admin',
          'teacher'
        ],
      },
      { 
        icon: '/exam.png',
        label: 'Exams',
        href: '/list/exams',
        visibile: [
          'admin',
          'teacher',
          'student',
          'parent'
        ],
      },
      { 
        icon: '/assignment.png',
        label: 'Assignments',
        href: '/list/assignments',
        visibile: [
          'admin',
          'teacher',
          'student',
          'parent'
        ],
      },
      { 
        icon: '/result.png',
        label: 'Results',
        href: '/list/results',
        visibile: [
          'admin',
          'teacher',
          'student',
          'parent'
        ],
      },
      { 
        icon: '/attendamce.png',
        label: 'Attendance',
        href: '/list/attendance',
        visibile: [
          'admin',
          'teacher',
          'student',
          'parent'
        ],
      },
      { 
        icon: '/calendar.png',
        label: 'Calendar',
        href: '/list/events',
        visibile: [
          'admin',
          'teacher',
          'student',
          'parent'
        ],
      },
      { 
        icon: '/message.png',
        label: 'Messages',
        href: '/list/messages',
        visibile: [
          'admin',
          'teacher',
          'student',
          'parent'
        ],
      },
      { 
        icon: '/announcement.png',
        label: 'Announcements',
        href: '/list/announcements',
        visibile: [
          'admin',
          'teacher',
          'student',
          'parent'
        ],
      },
    ],
  },
  {
    title: 'OTHER',
    items: [
      {
        icon: '/profile.png',
        label: 'Profile',
        href: '/profile',
        visibile: [
          'admin',
          'teacher',
          'student',
          'parent',
        ],
      },
    ],
  },
]