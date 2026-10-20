'use client'
import AutomatedReport from '@/components/reports-analytics/AutomatedReport';
import CustomizedReport from '@/components/reports-analytics/CustomizedReport';
import React, { useState } from 'react'

const Page = () => {

  const [activeTab, setActiveTab] = useState('1');

  const tabs = [
    { name: 'Automated Report', id: '1', component: <AutomatedReport/> },
    { name: 'Customized Report', id: '2', component: <CustomizedReport/> },
  ];

  return (
    <div className='bg-white p-4'>
      <div className='border border-borderGray p-2 rounded-lg w-full'>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:w-[70%] w-full'>
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
