'use client'
import Button from '@/components/shared/Button'
import SearchField from '@/components/shared/SearchField'
import React, { useState } from 'react'
import { LuCalendarDays } from "react-icons/lu";
import boxes from '@/public/assets/icons/boxes.svg'
import Image from 'next/image';
import CalenderView from '@/components/activity-management/CalenderView';
import Modal from '@/components/shared/Modal';
import MeatingSchedulePopup from '@/components/contact-management/SalesRecordPopup';
import Meatings from '@/components/meating-schedule/Meatings';

const Page = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [activeTab, setActiveTab] = useState('2');


    const tabs = [
        { icon: <Image alt='' src={boxes} />, id: '1', component: <CalenderView /> },
        { icon: <LuCalendarDays className='text-xl' />, id: '2', component:<Meatings/> },
    ];

    const handleShowPopup = () => {
        setShowPopup(true)
    }

    const handleClosePopup = () => {
        setShowPopup(false)
    }

    return (
        <div className='bg-white p-4' >
            <div className='border border-borderGray rounded-xl'>
                <div className='flex items-center sm:flex-row flex-col gap-3 justify-between p-3 w-full'>
                    <div className='sm:w-[35%] w-full ' >
                        <SearchField />
                    </div>
                    <div className='flex items-center gap-2 justify-end sm:w-auto w-full flex-1'>
                        <div className='sm:w-fit w-full'>
                            <Button onClick={handleShowPopup} label={'+Add New Meeting'} />
                        </div>
                        <div className='bg-Cgreen flex items-center justify-between sm:w-auto w-[45%] gap-2 p-2 pl-3 rounded-md'>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={` p-1.5 rounded-lg ${activeTab === tab.id ? 'bg-white shadow-xl' : 'bg-transparent'}`}
                                >
                                    {tab.icon}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='mt-4 overflow-auto w-full min-h-screen bg-white'>
                    {tabs.find((tab) => tab.id === activeTab)?.component}
                </div>
            </div>

            {/* popup */}
            <Modal label={'Add New Meeting'} isOpen={showPopup} onClose={handleClosePopup} >
                <MeatingSchedulePopup />
            </Modal>
        </div>
    )
}

export default Page
