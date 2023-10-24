
import { FooterWithSitemap } from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';


import React from 'react'

export default function Home({}) {
  return (
    <>
    <main className="bg-slate-50 h-fit w-screen relative flex  flex-col justify-center items-center">
    <Header/>
    <Hero/>
   <FooterWithSitemap/>
   
    </main>
    </>
  );
}
