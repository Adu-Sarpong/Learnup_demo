// components/JoinUsSection.js
import React from 'react';
import './styles/style.css';

const JoinUsSection = () => {




    return (
        <div className='flex flex-row gap-8 bg-blue-200 shadow-lg h-[600px] bg-opacity-50 w-screen items-center justify-center mt-10 pt-8 pb-8 mb-10 '
            style={{

                backgroundImage: "url('shape-.png')",

            }} >

            <div className=''>
                <div className="h-[400px] w-[700px]  text-white bg-cover relative flex bg-opacity-10 "
                    style={{
                        backgroundImage: "url('gg5.jpg')",
                    }} >
                    <div className="flex flex-col items-center justify-center w-full h-full transition-all duration-500 opacity-100  bg-neutral-900/70 pb-50">
                        <h2 className=" text-3xl font-semibold pb-5">Become an Instructor</h2>
                        <h3 className="text-[18px] font-medium text-left ml-10 mr-10 font-sans">
                            Get certified, master modern tech skills, and level up your career
                            whether you’re starting out  as a beginner, intermediate or a seasoned
                            pro. 95% of eLearning learners report our hands-on content
                            directly helped their careers.
                        </h3>
                        <button className="btn btn-theme mt-4 hover:animate scale-up duration-300 bg-white text-black hover:bg-customPink hover:text-white w-40 rounded-full h-12 hover:scale-125">
                            Join now
                        </button>

                    </div>
                </div>
            </div>
            <div>
                <div
                    className="h-[400px] w-[700px]  text-white bg-cover relative flex bg-opacity-0 "
                    style={{
                        backgroundImage: "url('gg3.jpg')",
                    }} >
                    <div className="flex flex-col items-center justify-center w-full h-full transition-all duration-500 opacity-100  bg-neutral-900/70 pb-50">
                        <h2 className=" text-3xl font-semibold pb-5">Become a Student</h2>
                        <h3 className="text-[18px] font-medium text-left ml-10 mr-10 font-sans">
                            Get certified, master modern tech skills, and level up your career
                            whether you’re starting out  as a beginner, intermediate or a seasoned
                            pro. 95% of eLearning learners report our hands-on content
                            directly helped their careers.
                        </h3>
                        <button className="btn btn-theme mt-4 transition-all duration-300 bg-white text-black hover:bg-customPink hover:text-white w-40 rounded-full h-12 hover:scale-125">
                            Join now
                        </button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default JoinUsSection;
