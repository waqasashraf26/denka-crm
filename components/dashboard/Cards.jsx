import Image from 'next/image'
import React from 'react'
import downIcon from '@/public/assets/icons/downIcon.svg'
import upIcon from '@/public/assets/icons/upIcon.svg'

const Cards = ({data}) => {
    return (
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5' >
            {
                data.map((e, i) => (
                    <div key={i} className='border border-borderGray flex flex-col items-start gap-6 rounded-lg p-4' >
                        <div className='flex items-center justify-between w-full'>
                            <div>
                                <p className='font-medium'>{e.name}</p>
                                <h1 className='text-2px font-bold mt-1'>{e.value}</h1>
                            </div>
                            <div className='border border-borderGray rounded-lg p-2' >
                                <Image alt='' src={e.icon} />
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-full'>
                            <p className='text-gray'>{e.time}</p>
                            <div className={` ${e.periodIcon === downIcon ? 'bg-[#FAEBEB] text-red' : 'bg-[#F3FAEB] text-green'}  rounded-full flex items-center text-[11px] gap-1 px-2`}>
                                <Image alt='' src={e.periodIcon} />
                                <p>{e.periodValue}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards
