import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-grey-dark px-2 bg-light'>
        <Image src='/search-3.png' alt='' width={14} height={14} />
        <input type='text' placeholder='Search...' className='w-200px p-2 bg-transparent outline-none'/>
      </div>
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-light rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src='/message.png' alt='' width={20} height={20} />
        </div>
        <div className='bg-light rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image src='/announcement.png' alt='' width={20} height={20} />
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-sky-dark text-light rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>Ed Walker</span>
          <span className='text-[10px] text-grey-dark text-right'>Admin</span>
        </div>
        <Image src='/user.png' alt='' width={36} height={36} className='rounded-full bg-light' /> 
      </div>
    </div>
  )
}

export default Navbar
