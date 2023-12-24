import React from 'react'
import { Stories } from '@/constants'
import StoryCard from './StoryCard'

const Kolkata = () => {
  return (
    <section id="kolkata" className='w-full flex relative overflow-x-auto  flex-col item-center text-center p-7'  >
     <div className="kolkata__overlay" />
     <h2 className='text-4xl text-[#FF7537] font-extrabold' >Kolkata: A Sea of Faces and a Thousand places
     <br/>Where Education Meets Exploration!
     </h2>
     <p className=' mt-5 text-base text-white font-semibold md:pl-0 pl-3' >At Get Local, we believe education goes beyond classroom walls. Our mission is to inspire young
minds by unlocking the treasures of knowledge found right in our City of Joy. We are dedicated to
creating unique and enriching experiences for students to learn through exploration.</p>
<h2 className='text-4xl text-[#FF7537] font-extrabold mt-2' >
   Our Stories 
</h2>
<div className='flex gap-5 p-5 w-full m-auto justify-center flex-wrap  ' >
 { Stories.map((item, idx)=>(
    <StoryCard key={idx} story={item} />
 )) }
</div>
    </section>
  )
}

export default Kolkata