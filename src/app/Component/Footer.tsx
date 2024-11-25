import { EnvelopeIcon } from '@heroicons/react/16/solid'
import { DevicePhoneMobileIcon, MapIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
        <h1 className='heading text-center text-4xl font-bold text-white pb-[5rem]'>CONTACT <span className='text-yellow-400'>ME</span></h1>
      <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]'>
        <div className='flex items-center space-x-6'>
          <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-gray-200'>
            {/* Ensure the icon is visible by using a contrasting color */}
            <MapIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
          </div>
          <div>
                <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>
                Address
                </h1>
                <p className='text-[17px] w-[90%] text-white opacity-60'>
                Karachi,Korangi KDA Secter 31/C-2
                </p>
            </div>
        </div>
        <div className='flex items-center space-x-6'>
          <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-gray-200'>
            {/* Ensure the icon is visible by using a contrasting color */}
            <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
          </div>
          <div>
                <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>
                Phone
                </h1>
                <p className='text-[17px] w-[90%] text-white opacity-60'>
                +923072022168
                </p>
            </div>
        </div>
        <div className='flex items-center space-x-6'>
          <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-gray-200'>
            {/* Ensure the icon is visible by using a contrasting color */}
            <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
          </div>
          <div>
                <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>
                Send Us Email
                </h1>
                <p className='text-[17px] w-[90%] text-white opacity-60'>
                syedabdulrahman996@gmail.com
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
