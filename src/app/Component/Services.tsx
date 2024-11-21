import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
        <p className='heading text-center text-3xl font-semibold text-white'>
            MY <span className='text-yellow-400'>SERVICES</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
            <div data-aos="fade-right">
                <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-clip p-[2rem]'>
                    <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                    <h1 className='text-[20px] md:text-[20px] mt-[1.5rem] mb-[1.5rem] text-center'>
                    Frontend 
                    </h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    Websites that look great on all devices
                    (mobile, tablet, desktop) using modern responsive design techniques.
                    </p>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
                <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-clip p-[2rem]'>
                    <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                    <h1 className='text-[20px] md:text-[20px] mt-[1.5rem] mb-[1.5rem] text-center'>
                    Backend
                    </h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    Designing and developing engaging, optimized landing pages for campaigns and lead generation.
                    </p>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="500">
                <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-clip p-[2rem]'>
                    <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                    <h1 className='text-[20px] md:text-[20px] mt-[1.5rem] mb-[1.5rem] text-center'>
                    Fullstack
                    </h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>
                    Building websites from scratch that meet client-specific needs, ensuring custom design and features.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
