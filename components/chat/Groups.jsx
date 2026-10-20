import { ChatGroupsData, ChatPeopleData } from '@/data';
import Image from 'next/image';
import React from 'react'
import { FiSearch } from "react-icons/fi";


const Groups = () => {
    return (
        <div className='space-y-6' >
            <div className='flex items-center gap-2 px-3 border border-borderGray rounded-xl py-2'>
                <FiSearch className='text-xl' />
                <input type="text" className='bg-white w-full outline-none text-lg' placeholder='Search' name="" id="" />
            </div>

            <div className='border border-borderGray rounded-xl p-3'>
                <h1 className='xl:text-3xl lg:text-2xl text-xl font-bold'>Groups</h1>
                {
                    ChatGroupsData.map((e, i) => (
                        <div key={i} className={`flex items-start justify-between py-2 w-full ${i < ChatGroupsData.length - 1 ? 'border-b border-borderGray' : 'border-none'} `}>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <Image alt='' src={e.icon} />
                                </div>
                                <div>
                                    <h1 className='text-primary font-semibold'>{e.name}</h1>
                                    <p className='text-sm'>{e.sms}</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-secondary text-sm whitespace-nowrap'>{e.time}</p>
                                {
                                    e.notification > 0 &&
                                    <div className='flex justify-end'>
                                        <p className='bg-red px-1 w-fit rounded-full text-xs text-white' >{e.notification}</p>
                                    </div>
                                }

                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='border border-borderGray rounded-xl p-3'>
                <h1 className='xl:text-3xl lg:text-2xl text-xl font-bold'>People</h1>
                {
                    ChatPeopleData.map((e, i) => (
                        <div key={i} className={`flex items-start justify-between py-2 w-full ${i < ChatPeopleData.length - 1 ? 'border-b border-borderGray' : 'border-none'} `}>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <Image alt='' src={e.icon} />
                                </div>
                                <div>
                                    <h1 className='text-primary font-semibold'>{e.name}</h1>
                                    <p className='text-sm'>{e.sms}</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-secondary text-sm whitespace-nowrap'>{e.time}</p>
                                {
                                    e.notification > 0 &&
                                    <div className='flex justify-end'>
                                        <p className='bg-red px-1 w-fit rounded-full text-xs text-white' >{e.notification}</p>
                                    </div>
                                }

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Groups
