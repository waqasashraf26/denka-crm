import React, { useState } from 'react';
import boxes from '@/public/assets/icons/boxes.svg';
import calenderIcon from '@/public/assets/icons/calenderIcon.svg';
import Image from 'next/image';
import BoardView from './BoardView';
import CalenderView from './CalenderView';

const Reminders = () => {
    const [activeTab, setActiveTab] = useState('1');

    const tabs = [
        { icon: boxes, name: 'Board View', id: '1', component: <BoardView /> },
        { icon: calenderIcon, name: 'Calendar View', id: '2', component: <CalenderView/> }, 
    ];

    return (
        <div className='border border-borderGray rounded-xl'>
            <div className='sm:px-3 w-full border-b border-borderGray'>
                <div className='flex sm:w-fit w-full  sm:flex-row flex-col whitespace-nowrap items-center sm:gap-4'>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full px-4 py-4 flex items-center  gap-1 ${activeTab === '1' ? 'rounded-t-xl':''} justify-center text-black ${activeTab === tab.id ? 'border-mainBlue sm:bg-transparent  bg-[#F0EDFF] border-b-2' : 'sm:border-0 border-b  '}`}
                        >
                            <Image alt='' src={tab.icon} className='w-5 h-5' />
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className=' overflow-auto w-full min-h-screen bg-white'>
                {tabs.find((tab) => tab.id === activeTab)?.component}
            </div>
        </div>
    );
};

export default Reminders;
