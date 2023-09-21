
import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Socials from '@/components/Socials';
import React from 'react'

export default function Home({}) {
  return (
    <>
    <main className="bg-slate-50 h-fit w-screen relative flex  flex-col justify-center items-center">
    <Header/>
    <Hero/>
   <About/>
   <Contact/>
   <Experience/>
   <Projects/>
   <Socials/>
   
    </main>
    </>
  );
}
