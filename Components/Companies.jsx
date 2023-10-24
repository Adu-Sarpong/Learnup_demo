import React from 'react'
import Image from 'next/image';
const Companies = () => {
    return (
        <div className=''>
            <section className=" bg-slate-200  bg-cover w-screen shadow-sm mb-6 ">
                <h2 className='text-center pt-2 font-bold'> Trusted By Companies of All sizes</h2>
                <div className="container px-2 py-2 mx-auto  flex justify-center">




                    <div className="flex flex-row items-center h-20 gap-32 ">
                    <Image
                             width={70} // Specify the width in pixels
                             height={200}
        src="/gg3.jpg" // Path to the image in the public directory
        alt=""
        className="rounded-full h-14"
      />
                       <Image
                             width={70} // Specify the width in pixels
                             height={200}
        src="/gg3.jpg" // Path to the image in the public directory
        alt=""
        className="rounded-full h-14"
      />
                       <Image
                             width={70} // Specify the width in pixels
                             height={200}
        src="/gg3.jpg" // Path to the image in the public directory
        alt=""
        className="rounded-full h-14"
      />
                       <Image
                             width={70} // Specify the width in pixels
                             height={200}
        src="/gg3.jpg" // Path to the image in the public directory
        alt=""
        className="rounded-full h-14"
      />
                        <Image
                             width={70} // Specify the width in pixels
                             height={200}
        src="/gg3.jpg" // Path to the image in the public directory
        alt=""
        className="rounded-full h-14"
      />
                        <Image
                             width={70} // Specify the width in pixels
                             height={200}
        src="/gg3.jpg" // Path to the image in the public directory
        alt=""
        className="rounded-full h-14"
      />
                    </div>



                </div>
            </section>

        </div>
    )
}

export default Companies