import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  
    const navLinks = ["Home", "Featured Destinations", "Traveller's Journal"]
  
    return (
    <nav className=' flex justify-between items-center px-5 py-3 bg-[#F5F5F5] overflow-hidden'>
     <div  className='flex items-center'>
     <Image
       src="/logo.png"
       height={120}
       width={80}
       alt='logo'
     />
     <ul className='hidden md:flex items-center gap-3 pl-10' >
      { navLinks.map((item, index)=>(
       <li className='font-bold' key={index} >{item}</li>
      )) }
     </ul>
     </div>
     <button className='bg-black outline-none p-4 flex items-center gap-3 rounded-[12px]' >
     <Image
     src="/phone.svg"
     width={20}
     height={20}
     alt="phone"
     className='text-white object-contain'
     />
     <p className='text-white text-xl' >+919073480087</p>
     </button>
    </nav>
  )
}

export default Navbar