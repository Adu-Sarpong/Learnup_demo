import About from '@/Components/About';
import Contact from '@/Components/Contact';
import Experience from '@/Components/Experience';
import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import Projects from '@/Components/Projects';
import Socials from '@/Components/Socials';
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
