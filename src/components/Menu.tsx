import { menuItems } from './menuItems'
import Link from "next/link"

const Menu = () => {
  return (
    <div>
      {menuItems.map(i => (
        <div className='' key ={i.title}>
          <span>{i.title}</span>
          {i.items.map(item => (
            <Link
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu

