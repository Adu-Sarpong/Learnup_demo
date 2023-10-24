"use client"
import AllCategories from './AllCategoeries';
import Blog from './Blog';
import MySlider from './Companies';
import CounterCard from './CounterCard';
import CourseCat from './CourseCat';
import JoinUsSection from './Join';
import SimpleSlider from './Swipe';
import { EcommerceCard } from './Trial';







export const Hero = () => {
    return (
        <>
            <div id='home' className='h-[40rem] w-screen bg-cover bg-no-repeat ' style={{ backgroundImage: `url('/img1.jpg')` }}>
                {/* <img src="/img1.jpg" alt="my image"/> */}
                <div className="container px-2 py-40 mx-auto text-center">
                    <div className="max-w-xl mx-auto">
                        <h1 className=" font-semibold text-gray-800 dark:text-white lg:text-5xl pb-1">Lets Find The Right Course For You.</h1>

                        <p className="mt-6 text-gray-500 dark:text-gray-300 pb-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero simhgfilique obcaecati illum mollitia.
                        </p>

                        <form>
                            <label
                                htmlFor="default-search"
                                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600  "
                                    placeholder="Search Mockups, Logos..."
                                    required=""
                                />
                                <button
                                    type="submit"
                                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-red-300 "
                                >
                                    Search
                                </button>
                            </div>
                        </form>

                    </div>


                </div>
            </div>
          
         <AllCategories/>
            <CounterCard />
            <CourseCat />
<JoinUsSection/>
<SimpleSlider/>
<Blog/>
        </>
    )
}

export default Hero


