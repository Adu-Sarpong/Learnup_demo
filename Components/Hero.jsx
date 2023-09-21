import Image from 'next/image'
import React from 'react'

export const Hero = () => {
    return (
        <>
            <div id='home'
                className='h-[54rem] w-full bg-cover bg-no-repeat' style={{ backgroundImage: `url(https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?w=996&t=st=1695304506~exp=1695305106~hmac=f239bbcb56530fa8e7c2ff7147e5518396fecd9d4991cbb616dea4fa7eb1af79)` }}>
                <div className='h-full w-full flex justify-center items-end bg-gradient-to-tr from-[#002B6B]/90 via-[#10011A]/70 to-[#070643]/70 bg-blend-multiply]'>
                    <div className=' h-[66vh] w-1/3 space-y-10 pt-12'>
                        <h1 className='text-4xl text-white'>
                            🙋‍♂️ Hi I am{""} <span className='italic text-yellow-300 font-semibold'>Sarpong</span>
                        </h1>
                        <p className='text-gray-200 text-xl font-thin leading-relaxed tracking tracking-wider'>
                            {'"Coding enthusiast with 6 years of professional software engineering experience. Crafting efficient solutions and optimizing code for real-world challenges. Passionate about technology and always eager to embrace new opportunities."'}
                        </p>
                    </div>
                    <div className=' h-[70vh] w-1/3 relative'>
                        <Image
                        src={"/me.jpg"}
                        fill
                        alt="alpha"
                        priority={true}
                        className='object-contain'
                        />

                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero


