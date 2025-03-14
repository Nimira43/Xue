import Image from 'next/image'

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-sky-dark even:bg-sky-dark-extra p-4 flex-1 min-w-[130px]'>
      <div className='flex justify-between items-center'>
        <span className='text-[10px] text-grey-dark font-medium bg-light px-2 py-1 rounded-full'>2024/25</span>
        <Image src='/more.png' alt='' width={20} height={20}/> 
      </div>
      <h1 className='text-2xl font-semibold my-4 text-dark'>1,644</h1>
      <h2 className='uppercase text-sm text-dark'>{type}</h2>
    </div>
  )
}

export default UserCard
