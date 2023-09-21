"use client"
import Link from 'next/link';
import {usePathname} from 'next'
import React, { useState } from 'react'


export default function Header() {
    const[active, setActive] =useState('Home');
  return (
    <>
    <header className="w-3/5 h-fit py-2 px-8  fixed z-30 top-8 rounded-full border bg-slate-500">
  <nav>
    <ul className='flex justify-around'>
      {navs.map((navItem, idx) =>(
<Link href={`${navItem.url}`} key={idx} scroll={true}>
         <li 
         onClick={() => setActive(navItem.title)}
         className={`${active===navItem.title?' bg-white text-black ':''}py-2 px-4 rounded-full hover:bg-white hover:shadow-xl duration-300 cursor-pointer `}>{navItem.title}</li>
</Link>
      ))}
     
    </ul>
  </nav>
  
</header>
    </>
  )
}
const navs= [
    {url: '/#home', title:'Home'},
    {url: '/#about', title:'About'},
    {url: '/#experience', title:'Experience'},
    {url: '/#projects', title:'Projects'},
    {url: '/#socials', title:'Socials'},
    {url: '/#contact', title:'Contact'},
  ]