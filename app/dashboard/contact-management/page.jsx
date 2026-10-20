import Table from '@/components/contact-management/Table'
import Cards from '@/components/dashboard/Cards'
import { ContactManagementCards } from '@/data'
import React from 'react'

const Page = () => {
  return (
    <div className='bg-white p-4'>
      <div>
        <Cards data={ContactManagementCards} />
      </div>
      <div className=' mt-6'>
        <Table/>
      </div>
    </div>
  )
}

export default Page
