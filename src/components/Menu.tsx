import { menuItems } from './menuItems'
import Image from 'next/image'
import Link from "next/link"

const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
      {menuItems.map(i => (
        <div className='flex flex-col gap-2' key={i.title}>
          <span 
            className='hidden lg:block text-[#333] font-light my-4'
          >
            {i.title}
          </span>
          {i.items.map(item => (
            <Link 
              href={item.href} 
              key={item.label}
              className='flex items-center justify-center lg:justify-start gap-4 text-[#333]'
            >
              <Image 
                src={item.icon} 
                alt='' 
                width={20} 
                height={20} 
              />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu

