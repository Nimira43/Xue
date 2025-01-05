import Image from 'next/image'

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-darkSky even:bg-darkerSky p-4 flex-1 min-w-[130px]'>
      <div className='flex justify-between items-center'>
        <span className='text-[10px] text-[#333] font-medium bg-[#fff] px-2 py-1 rounded-full'>2024/25</span>
        <Image src='/more.png' alt='' width={20} height={20}/> 
      </div>
      <h1>1,644</h1>
      <h2>{type}</h2>
    </div>
  )
}

export default UserCard
