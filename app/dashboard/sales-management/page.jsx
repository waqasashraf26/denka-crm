'use client'
import Invoicing from '@/components/sales-management/Invoicing';
import LeadManagement from '@/components/sales-management/LeadManagement';
import ManagementOppurtunity from '@/components/sales-management/ManagementOppurtunity';
import PipelineChart from '@/components/sales-management/PipelineChart';
import React, { useState } from 'react';

const Page = () => {
    const [activeTab, setActiveTab] = useState('1');

    const tabs = [
        { name: 'Lead Management', id: '1', component: <LeadManagement /> },
        { name: 'Manage Opportunities', id: '2', component: <ManagementOppurtunity /> },
        { name: 'Quoting and Invoicing', id: '3', component: <Invoicing /> },
        { name: 'Sales Pipeline', id: '4', component: <PipelineChart /> },
    ];

    return (
        <div className='bg-white p-4'>
            <div className='border border-borderGray p-2 rounded-lg w-full'>
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:w-[80%] w-full'>
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
    );
};


export default Page;
