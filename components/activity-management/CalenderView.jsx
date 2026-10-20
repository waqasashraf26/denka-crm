'use client'
import { CalenderDaysData } from '@/data';
import { TodayDate } from '@/utils/TodayDate';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CalenderView = () => {
    const options = [
        { name: 'Weekly', value: 'weekly' },
        { name: 'Daily', value: 'daily' },
        { name: 'Monthly', value: 'monthly' },
        { name: 'Yearly', value: 'yearly' },
    ];

    const [currentDate, setCurrentDate] = useState(new Date());

    // Handle forward button click
    const handleForward = () => {
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + 1);
        setCurrentDate(nextDate);
    };

    // Handle backward button click
    const handleBackward = () => {
        const prevDate = new Date(currentDate);
        prevDate.setDate(currentDate.getDate() - 1);
        setCurrentDate(prevDate);
    };

    // Check if the current date is today
    const isToday = (date) => {
        const today = new Date();
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    };

    return (
        <div>
            <div className='flex items-center flex-wrap sm:gap-0 gap-3 bg-Cgreen py-2 w-full border-b sm:px-5 px-2 justify-between'>
                <div className='flex items-center gap-2 text-secondary'>
                    <button
                        className='p-2 rounded-md border border-borderGray'
                        onClick={handleBackward}
                    >
                        <IoIosArrowBack />
                    </button>
                    <div className='py-1 px-3 border border-borderGray rounded-md'>
                        <p>{isToday(currentDate) ? "Today" : currentDate.getDate()}</p>
                    </div>
                    <button
                        className='p-2 rounded-md border border-borderGray'
                        onClick={handleForward}
                    >
                        <IoIosArrowForward />
                    </button>
                    <h1 className='font-semibold sm:ml-3 text-black'>{TodayDate}</h1>
                </div>
                <div className='border border-borderGray px-3 py-2 text-secondary rounded-md'>
                    <select name="" id="" className='bg-transparent outline-none'>
                        {options.map((e, i) => (
                            <option key={i} value={e.value}>{e.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className='w-full custom-scrollbar overflow-x-auto overflow-y-hidden'>
                <div className='grid grid-cols-7 h-full min-w-[1400px]' >
                    {
                        CalenderDaysData.map((e, i) => (
                            <div key={i} className='h-full pb-10' >
                                <div className={`border-b  border-r px-4 py-8 border-borderGray`}>
                                    <p className='font-medium'>{e.day}</p>
                                    <h1 className='text-xl font-semibold' >03</h1>
                                </div>
                                <div className='border-r h-full border-borderGray px-3 pt-3 space-y-3'>
                                    {
                                        e.data.map((k, l) => (
                                            <div key={l} className='border border-borderGray  rounded-lg p-3' >
                                                <h1 className='text-xs font-semibold leading-3'>{k.name}</h1>
                                                <p className='text-secondary text-xs '>{k.time}</p>
                                                <div class="flex -space-x-2 overflow-hidden mt-3">
                                                    {k.image.map((img, index) => (
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
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CalenderView;
