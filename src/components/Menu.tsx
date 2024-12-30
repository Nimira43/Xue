import { menuItems } from './menuItems'
import Image from 'next/image'
import Link from "next/link"

const Menu = () => {
  return (
    <div>
      {menuItems.map(i => (
        <div className='' key ={i.title}>
          <span>{i.title}</span>
          {i.items.map(item => (
            <Link href={item.href} key={item.label}>
              <Image 
                src={item.icon} 
                alt='' 
                width={20} 
                height={20} 
                className='bg-[#fff] p-1 rounded-full'
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

