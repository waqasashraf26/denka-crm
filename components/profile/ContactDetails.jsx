import React from 'react'
import { LuPencil } from "react-icons/lu";
import img from '@/public/assets/images/profileImg.svg'
import Image from 'next/image';


const ContactDetails = () => {

    const data = [
        { name: 'Home Phone', value: '(308) 555-0121' },
        { name: 'Email Address', value: 'nevaeh.simmons@ee.com' },
        { name: 'Address', value: '2464 Royal Ln. Mesa, New ' },
        { name: 'Company', value: 'Gillette' },
    ]

    return (
        
        <div className='border border-borderGray rounded-lg sm:p-5 p-3 space-y-5'>
            <div className='flex items-center justify-between w-full gap-3'>
                <h1 className='font-bold md:text-2xl text-xl text-[#212121]'>Contact Details</h1>
                <button className='border border-borderGray rounded-md flex items-center gap-1 text-secondary px-2 py-1 text-xs'>
                    <LuPencil className='text-sm' />
                    Edit Profile
                </button>
            </div>
            <div className='flex items-center gap-4'>
                <div className='md:w-48 w-20 md:h-48 h-20'>
                    <Image alt='' src={img} className='w-full h-full rounded-full' />
                </div>
                <div className='flex flex-col items-start '>
                    <h1 className='md:text-2xl sm:text-xl text-lg font-bold'>James Williams</h1>
                    <p className='font-medium sm:text-base text-sm '>Co-Founder & Product Owner</p>
                    <p className='text-[#00000077] sm:text-sm text-xs'>Greater Los Angles Area</p>
                </div>
            </div>
            <div className='border border-[#0000001F] flex sm:flex-row flex-col sm:justify-between justify-center sm:items-start items-center gap-3 rounded-lg xl:px-16 px-4 lg:flex-nowrap flex-wrap  sm:py-10 py-4 bg-[#FAFBFB] ' >
                {
                    data.map((e, i) => (
                        <div key={i} className='flex flex-col items-start'>
                            <h1 className='text-[#212121] font-medium sm:text-start text-center w-full lg:text-base text-sm'>{e.value}</h1>
                            <p className='text-secondary lg:text-base text-sm sm:text-start text-center w-full'>{e.name}</p>
                        </div>
                    ))
                }
            </div>
        </div> 
    )
}

export default ContactDetails
