import { BoardViewData } from '@/data'
import Image from 'next/image'
import React from 'react'

const BoardView = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-6 mt-4'>
            {
                BoardViewData.map((e, i) => (
                    <div key={i} className='border border-borderGray rounded-lg ' >
                        <div className='flex items-start gap-2 p-3'>
                            <div className='border border-[#00000054] text-center rounded-md text-[10px]' >
                                <div className='px-3 py-0.5 border-b rounded-t-md bg-mainBlue text-white'>
                                    {e.day}
                                </div>
                                <div className='px-3 py-1 text-secondary'>
                                    {e.date}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h1 className='xl:text-xl lg:text-lg sm:text-base text-sm font-semibold xl:leading-5'>{e.name}</h1>
                                    <p className='text-secondary lg:text-base text-sm'>{e.time}</p>
                                </div>
                                <div class="flex -space-x-2 flex-wrap overflow-hidden mt-4">
                                    {e.image.map((img, index) => (
                                        <Image
                                            key={index}
                                            className="inline-block h-7 w-7 rounded-full ring-2 ring-white"
                                            src={img}
                                            alt={`Avatar ${index + 1}`}
                                            width={40} 
                                            height={40} 
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#8979FF0A] px-3 py-1 mt-3 flex items-center gap-3'>
                            <div className='bg-white w-4 h-4 rounded-full' ></div>
                            <p className='text-secondary'>Mark as completed</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default BoardView
