import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className='w-full flex h-[80vh] relative overflow-hidden md:flex-row flex-col' >
    <div className="hero__overlay" />
    <div className='flex flex-col flex-[1.1] p-7 justify-center' >
    <h2 className='text-4xl text-[#E129FF] font-bold' >Discover Kolkata with our innovative Cinematic Tours 
    <br/>
    the first of its kind in the world!!</h2>
    <p className=' mt-5 text-base text-white font-semibold' >Step into the world of real-time cinema where each tour unfolds with a scripted narrative
personifying the place. Locations are hand-picked based on the storyline, and our guides become

narrators, crafting a live storyboard.</p>
    </div>

    <div className='flex flex-1 items-center pr-2'>
     <p className=' mt-5 text-base text-white font-semibold md:pl-0 pl-3' >Our aim is to combat the sense of alienation often felt by travellers in new places with the perfect
orientation tour. We are dedicated to fostering a personal connection by showcasing Kolkata’s
evolution, like a real-time biopic. It’s the ultimate way to get local in just one day!</p>
    </div>
    </section>
  )
}

export default Hero