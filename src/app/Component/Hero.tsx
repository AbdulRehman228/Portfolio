import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'

const Hero = () => {
  return (
    <div className='bg-cover bg-center h-screen' style={{ backgroundImage: "url('/images/banner.jpg')" }}>
      <Particle />
      <div className='w-[80%] mx-auto grid lg:grid-cols-2 gap-[3rem] h-full items-center'>
        
        {/* Text Section */}
        <div>
          <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
            HI, I'M <span className='text-yellow-400'>S.A.REHMAN!</span>
          </h1>
          <TextEffect />
          <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
            Hi! I’m a frontend developer passionate about creating engaging, responsive websites that deliver seamless user experiences.
            I focus on bringing ideas to life with clean, intuitive designs that work perfectly across all devices.
            Explore my work to see how I can help make your vision a reality!
          </p>
          
          <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
            <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px]
            font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
              <p>Download Cv</p>
              <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-[500px] bg-[#55e6a5] relative lg:flex items-center justify-center rounded-full h-[500px] hidden'>
          <Image src="/images/me.5.jpg" alt='user' layout='fill' className='object-cover rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default Hero
