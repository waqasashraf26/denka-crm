'use client'
import AccountContact from '@/components/rolebase-access/AccountContact';
import RolesPermission from '@/components/rolebase-access/RolesPermission';
import React, { useState } from 'react'

const Page = () => {

    const [activeTab, setActiveTab] = useState('1');

    const tabs = [
        { name: 'Accounts and Contacts', id: '1', component: <AccountContact/> },
        { name: 'Roles and Permissions', id: '2', component: <RolesPermission/> },
    ];

    return (
        <div className='bg-white p-4'>
            <div className='border border-borderGray p-2 rounded-lg w-full'>
                <div className='flex gap-3 sm:flex-row flex-col  xl:w-[70%] w-full'>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full px-4 py-2 ${activeTab === tab.id ? 'bg-mainBlue rounded-md text-white' : 'bg-transparent text-black'}`}
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
