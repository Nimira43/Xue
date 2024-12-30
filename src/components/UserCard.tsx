import Image from 'next/image'

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-darkSky even:bg-darkerSky p-4 flex-1'>
      <div className='flex justify-between items-center'>
        <span>2024/25</span>
        <Image src='/more.png' alt='' width={20} height={20}/> 
      </div>
      <h1>1,643</h1>
      <h2>{type}</h2>
    </div>
  )
}

export default UserCard
