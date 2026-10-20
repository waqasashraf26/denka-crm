import { MeatingScheduleData } from '@/data'
import Image from 'next/image'
import React from 'react'
import Button from '../shared/Button'


const Meatings = () => {
    return (
        <div className='p-4'>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
            {
                MeatingScheduleData.map((e, i) => (
                    <div key={i} className='border border-borderGray p-3.5 space-y-3 rounded-lg' >
                        <div>
                            <Image alt='' src={e.icon} />
                        </div>
                        <h1 className='font-semibold'>{e.name}</h1>
                        <div className='bg-[#8979FF14] px-3 py-1 rounded-full w-fit'>
                            <p className='text-secondary text-[10px]'>{e.time}</p>
                        </div>
                        <p className='text-xs font-medium'>{e.des}</p>
                        <div class="flex -space-x-1 flex-wrap overflow-hidden ">
                            {e.image.map((img, index) => (
                                <Image
                                    key={index}
                                    className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                                    src={img}
                                    alt={`Avatar ${index + 1}`}
                                    width={40}
                                    height={40}
                                />
                            ))}
                        </div>
                        <div className='w-full'>
                            <Button label={'Join Meeting'} />
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default Meatings
