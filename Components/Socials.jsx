import Link from 'next/link'
import React from 'react'

const Socials = () => {
  return (
    <div >
      <footer className="footer p-10 bg-base-200 text-base-content flex justify-center ">
  <aside className='mx-20'>
   
    <p>TECHONE IT AND DIGITAL SOLUTIONS<br/><span className='italic text-gray-700'>
    Bringing Technology At Your Doorstep</span></p>
  </aside> 
  <nav className=' flex flex-col mx-20'>
    <header className="footer-title flex flex-col font-semibold text-red-400 text-lg">Services</header> 
    <Link href="" className='hover:scale-125 duration-300 hover:text-red-300' >Branding</Link> 
    <Link href="" className='hover:scale-125 duration-300 hover:text-red-300'>Design</Link>  
    <Link href=""className='hover:scale-125 duration-300 hover:text-red-300'>Marketing</Link> 
    <Link href=""className='hover:scale-125 duration-300 hover:text-red-300'>Advertisement</Link> 
  </nav> 
  <nav  className=' flex flex-col mx-20'>
    <header className="footer-title flex flex-col font-semibold text-red-400 text-lg">Company</header> 
    <Link href="" className='hover:scale-125 duration-300 hover:text-red-300'>About us</Link> 
    <Link href="" className='hover:scale-125 duration-300 hover:text-red-300'>Contact</Link> 
    <Link href="" className='hover:scale-125 duration-300 hover:text-red-300'>Jobs</Link> 
    <Link href=""className='hover:scale-125 duration-300 hover:text-red-300'>Press kit</Link> 
  </nav> 
  <nav  className=' flex flex-col mx-20'>
    <header className="footer-title flex flex-col font-semibold text-red-400 text-lg" >Legal</header> 
    <Link href=""className='hover:scale-125 duration-300 hover:text-red-300'>Terms of use</Link> 
    <Link href="" className='hover:scale-125 duration-300 hover:text-red-300'>Privacy policy</Link> 
    <Link href="" className='hover:scale-125 duration-300 hover:text-red-300'>Cookie policy</Link> 
  </nav>
</footer>



    </div>
  )
}

export default Socials