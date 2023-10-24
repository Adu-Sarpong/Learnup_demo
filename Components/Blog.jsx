"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import './styles/style.css';
import Image from 'next/image';
export default function CourseCat() {


    return (
        <>
            <div className="w-full max-w-7xl mb-10">
                <div className='text-center'>
                    <p className='text-[25px] text-customPink mt-10' >Latest Blog</p>
                    <h4 className='text-[16px] text-gray-500 mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h4>
                </div>


                <div className='flex flex-col'>
                    <div className='flex  items-center justify-items-center gap-8'>
                        <div className=" mb-6 transition duration-500 transform border border-gray-100  group hover:-translate-y-2 hover:shadow-2xl rounded-2xl overflow-hidden shadow-md w-[400px]">

                            <div className="relative  rounded-lg h-[272px] w-[456px]">
                                <Image
                                    className="object-cover w-full transition-transform duration-500 transform h-52 group-hover:scale-105"
                                    src="/course-1.jpg"
                                    alt="image1"
                                    fill />
                            </div>

                            <div className="absolute bg-customBlue  top-0 left-0 z-10 flex items-center justify-center w-full h-full text-xl text-white transition-all duration-300 transform  rounded-lg opacity-0 bg-opacity-80 start-0-0 group-hover:scale-105 group-hover:opacity-50"
                                target="_blank"
                                rel="noopener noreferrer">
                            </div>

                            <Link href="#">
                                <div className='bg-white w-fit absolute z-50 p-2 top-[50%] left-[30%] rounded-lg transform group-hover:scale-105 group-hover:opacity-100 duration-300 opacity-0  shadow-md shadow-gray-600'>
                                    <div className="whitespace-nowrap flex">
                                        <p className="text-customPink font-bold">Get Started</p>
                                        <svg className="w-6 h-6 ml-2 text-customPink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg ">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                            <div className="p-3">
                                <div className="flex items-center justify-between w-full  mb-5 ">
                                    <div className="flex items-center ">

                                        <div className="flex flex-1 ">
                                            <div className="">

                                                <p className="text-sm text-gray-500 font-bold">ADMIN</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end ">
                                        <div className="flex items-center text-sm text-gray-500">
                                            Dec 20th 2024
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>

                                        </div>
                                    </div>
                                </div>

                                <div className=" w-full   p-2 ">

                                    <div className="flex items-center justify-between w-full ">
                                        <p className="text-sm text-gray-500 mb-5">UI/UX Design Workshop</p>
                                    </div>
                                    <div className="">
                                        <p className="text-lg text-gray-500">How to Get Started on your Journey of
                                          becoming an expert in UI/UX Designer</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='flex flex-col'>
                    <div className='flex  items-center justify-items-center gap-8'>
                        <div className=" mb-6 transition duration-500 transform border border-gray-100  group hover:-translate-y-2 hover:shadow-2xl rounded-2xl overflow-hidden shadow-md w-[400px]">

                            <div className="relative  rounded-lg h-[272px] w-[456px]">
                                <Image
                                    className="object-cover w-full transition-transform duration-500 transform h-52 group-hover:scale-105"
                                    src="/course-1.jpg"
                                    alt="image1"
                                    fill />
                            </div>

                            <div className="absolute bg-customBlue  top-0 left-0 z-10 flex items-center justify-center w-full h-full text-xl text-white transition-all duration-300 transform  rounded-lg opacity-0 bg-opacity-80 start-0-0 group-hover:scale-105 group-hover:opacity-50"
                                target="_blank"
                                rel="noopener noreferrer">
                            </div>

                            <Link href="#">
                                <div className='bg-white w-fit absolute z-50 p-2 top-[50%] left-[30%] rounded-lg transform group-hover:scale-105 group-hover:opacity-100 duration-300 opacity-0  shadow-md shadow-gray-600'>
                                    <div className="whitespace-nowrap flex">
                                        <p className="text-customPink font-bold">Get Started</p>
                                        <svg className="w-6 h-6 ml-2 text-customPink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg ">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                            <div className="p-3">
                                <div className="flex items-center justify-between w-full  mb-5 ">
                                    <div className="flex items-center ">

                                        <div className="flex flex-1 ">
                                            <div className="">

                                                <p className="text-sm text-gray-500 font-bold">ADMIN</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end ">
                                        <div className="flex items-center text-sm text-gray-500">
                                            Dec 20th 2024
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>

                                        </div>
                                    </div>
                                </div>

                                <div className=" w-full   p-2 ">

                                    <div className="flex items-center justify-between w-full ">
                                        <p className="text-sm text-gray-500 mb-5">UI/UX Design Workshop</p>
                                    </div>
                                    <div className="">
                                        <p className="text-lg text-gray-500">How to Get Started on your Journey of
                                          becoming an expert in UI/UX Designer</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex  items-center justify-items-center gap-8'>
                        <div className=" mb-6 transition duration-500 transform border border-gray-100  group hover:-translate-y-2 hover:shadow-2xl rounded-2xl overflow-hidden shadow-md w-[400px]">

                            <div className="relative  rounded-lg h-[272px] w-[456px]">
                                <Image
                                    className="object-cover w-full transition-transform duration-500 transform h-52 group-hover:scale-105"
                                    src="/course-1.jpg"
                                    alt="image1"
                                    fill />
                            </div>

                            <div className="absolute bg-customBlue  top-0 left-0 z-10 flex items-center justify-center w-full h-full text-xl text-white transition-all duration-300 transform  rounded-lg opacity-0 bg-opacity-80 start-0-0 group-hover:scale-105 group-hover:opacity-50"
                                target="_blank"
                                rel="noopener noreferrer">
                            </div>

                            <Link href="#">
                                <div className='bg-white w-fit absolute z-50 p-2 top-[50%] left-[30%] rounded-lg transform group-hover:scale-105 group-hover:opacity-100 duration-300 opacity-0  shadow-md shadow-gray-600'>
                                    <div className="whitespace-nowrap flex">
                                        <p className="text-customPink font-bold">Get Started</p>
                                        <svg className="w-6 h-6 ml-2 text-customPink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg ">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                            <div className="p-3">
                                <div className="flex items-center justify-between w-full  mb-5 ">
                                    <div className="flex items-center ">

                                        <div className="flex flex-1 ">
                                            <div className="">

                                                <p className="text-sm text-gray-500 font-bold">ADMIN</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end ">
                                        <div className="flex items-center text-sm text-gray-500">
                                            Dec 20th 2024
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>

                                        </div>
                                    </div>
                                </div>

                                <div className=" w-full   p-2 ">

                                    <div className="flex items-center justify-between w-full ">
                                        <p className="text-sm text-gray-500 mb-5">UI/UX Design Workshop</p>
                                    </div>
                                    <div className="">
                                        <p className="text-lg text-gray-500">How to Get Started on your Journey of
                                          becoming an expert in UI/UX Designer</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                    </div>

                    
                </div>

                
            </div>

            
        </>
    );
}
