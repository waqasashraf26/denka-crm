import React from 'react'
import icon from '@/public/assets/icons/group1.svg'
import Image from 'next/image'
import { GoDeviceCameraVideo } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { ChatReceiverSms, ChatSenderSms } from '@/data';
import { ImAttachment } from "react-icons/im";
import { FaRegFaceLaughBeam } from "react-icons/fa6";
import { MdOutlineCameraAlt } from "react-icons/md";
import { IoMdMic } from "react-icons/io";

const ChatBox = () => {
    return (
        <div className='border border-borderGray p-3 xl:px-5 rounded-xl h-full flex flex-col justify-between'>

            <div className='flex gap-2 justify-between border-b border-borderGray pb-3 items-center'>
                <div className='flex gap-2 items-center'>
                    <div>
                        <Image alt='' src={icon} className='w-10' />
                    </div>
                    <div>
                        <h1 className='lg:text-3xl text-2xl font-semibold'>Anil</h1>
                        <p className='text-xs' >Online - Last seen, 2.02pm</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <GoDeviceCameraVideo className='text-2xl' />
                    <HiOutlineDotsVertical className='text-2xl' />
                </div>
            </div>

            <div className='sm:px-4 px-2 py-2 space-y-8 h-full flex flex-col justify-between pb-3'>
                <div className='flex justify-start w-[80%]'>
                    <div className='flex flex-col items-start '>
                        {
                            ChatSenderSms.map((e, i) => (
                                <div className='bg-[#E7E7E7] sm:text-base text-xs rounded-full p-3 py-1.5 relative mt-3' key={i} >
                                    {e.sms}
                                    <div className='bg-[#E7E7E7] rounded-full p-1.5 absolute bottom-0 -left-3'></div>
                                </div>
                            ))
                        }
                        <p className=' text-secondary text-start px-3 mt-1 sm:text-sm text-xs'>Today, 8.30pm</p>
                    </div>
                </div>
                <div className='flex justify-end w-full'>
                    <div className='flex justify-end w-[80%]'>
                        <div className='flex flex-col items-end  gap-3'>
                            {
                                ChatReceiverSms.map((e, i) => (
                                    <div key={i}>
                                        <div className='bg-[#1E2329] sm:text-base text-xs rounded-full p-3 py-1.5 relative text-white' >
                                            {e.sms}
                                            <div className='bg-[#1E2329] rounded-full p-1.5 absolute -right-3'></div>
                                        </div>
                                        <p className=' text-secondary text-end mt-1 sm:text-sm text-xs'>Today, 8.3{2 + i}pm</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='flex justify-start w-full'>
                    <div className='flex flex-col items-start '>
                        <div className='bg-[#E7E7E7] sm:text-base text-xs rounded-full p-3 py-1.5 relative mt-3'  >
                            I am doing well, Can we meet tomorrow?
                            <div className='bg-[#E7E7E7] rounded-full p-1.5 absolute bottom-0 -left-3'></div>
                        </div>
                        <p className=' text-secondary text-start px-3 mt-1 sm:text-sm text-xs'>Today, 8.36pm</p>
                    </div>
                </div>
                <div className='flex justify-end w-full'>
                    <div className='flex flex-col items-end'>
                        <div className='bg-[#1E2329] sm:text-base text-xs rounded-full p-3 py-1.5 relative text-white' >
                            Yes Sure!
                            <div className='bg-[#1E2329] rounded-full p-1.5 absolute -right-3'></div>
                        </div>
                        <p className=' text-secondary text-end mt-1 sm:text-sm text-xs'>Today, 8.58pm</p>
                    </div>
                </div>

                <div className='bg-[#EFF6FCDE] pl-3 rounded-xl flex items-center justify-between mt-8 mb-4' >
                    <div className='flex items-center gap-3 flex-1'>
                        <div className='relative cursor-pointer'>
                            <ImAttachment className='sm:text-xl text-lg' />
                            <input type="file" className='absolute w-full h-full top-0 cursor-pointer opacity-0' name="" id="" />
                        </div>
                        <input type="text" className='sm:text-sm bg-transparent text-xs outline-none w-[90%]' placeholder='Type your message here...' name="" id="" />
                    </div>
                    <div className='flex items-center xl:w-[25%] lg:w-[35%] w-fit xl:gap-6 lg:gap-3 sm:gap-5 gap-2 justify-between'>
                        <FaRegFaceLaughBeam className='sm:text-xl text-lg' />
                        <MdOutlineCameraAlt className='sm:text-2xl text-lg' />
                        <div className='p-2 rounded-lg bg-[#1E2329]' >
                            <IoMdMic className='text-white sm:text-2xl text-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBox
