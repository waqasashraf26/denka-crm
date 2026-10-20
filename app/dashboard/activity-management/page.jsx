'use client'
import Reminders from '@/components/activity-management/Reminders';
import TaskAssignment from '@/components/activity-management/TaskAssignment';
import React, { useState } from 'react'

const Page = () => {

    const [activeTab, setActiveTab] = useState('1');

    const tabs = [
        { name: 'Task Assignments', id: '1', component: <TaskAssignment /> },
        { name: 'Remminders', id: '2', component: <Reminders/> },
        { name: 'Activity Tracking', id: '3', component: <div>h3</div> },
    ];

    return (
        <div className='bg-white p-4'>
            <div className='border border-borderGray p-2 rounded-lg w-full'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:w-[70%] w-full'>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            disabled={tab.id === '3'}
                            className={`w-full px-4  py-2 ${tab.id === '3' ? 'cursor-not-allowed disabled':''} ${activeTab === tab.id ? 'bg-mainBlue rounded-md text-white' : 'bg-transparent text-black'}`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className='mt-4 overflow-auto w-full min-h-screen bg-white'>
                {tabs.find((tab) => tab.id === activeTab)?.component}
            </div>
        </div>
    )
}

export default Page
