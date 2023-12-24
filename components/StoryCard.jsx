import Image from 'next/image'
import React from 'react'

const StoryCard = ({story}) => {
  return (
    <div className='flex flex-col p-3 bg-[#F5F5F5] items-center h-auto' >
      <h3 className='text-xl text-[#FF7537] font-extrabold'>{story.title}</h3>
      <Image
      src={story.image}
      height={120}
      width={250}
      alt={story.title}
      className='mt-2'
      />
    </div>
  )
}

export default StoryCard