import ContactDetails from '@/components/profile/ContactDetails'
import HistoryPanel from '@/components/profile/HistoryPanel'
import MoreDetails from '@/components/profile/MoreDetails'
import React from 'react'

const Page = () => {
    return (
        <div className='bg-white p-4'>
            <div className='border border-borderGray rounded-lg p-4'>
            <div>
                <ContactDetails />
            </div>
            <div>
                <MoreDetails />
            </div>
            <div>
                <HistoryPanel />
            </div>
            </div>
        </div>
    )
}

export default Page
