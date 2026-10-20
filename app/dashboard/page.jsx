import Cards from '@/components/dashboard/Cards'
import BreakDownChart from '@/components/dashboard/graphs/BreakdownChart'
import DistributionStatus from '@/components/dashboard/graphs/DistributionStatus'
import SalesChart from '@/components/dashboard/graphs/SalesChart'
import TotalSalesChart from '@/components/dashboard/graphs/TotalSaledChart'
import { DashboardCards } from '@/data'
import React from 'react'

const Page = () => {
  return (
    <div className='bg-white p-4' >
      <div>
        <Cards data={DashboardCards} />
      </div>
      <div className='flex flex-col gap-5 py-4'>
        <div className='flex justify-between lg:flex-row flex-col gap-5'>
          <div className='lg:w-[65%] w-full'>
            <TotalSalesChart />
          </div>
          <div className='lg:w-[35%] w-full flex justify-center'>
            <BreakDownChart />
          </div>
        </div>
        <div className='w-full flex justify-between lg:flex-row flex-col h-full gap-5'>
          <div className='lg:w-1/2 w-full h-full'>
            <SalesChart />
          </div>
          <div className='lg:w-1/2 w-full h-full'>
            <DistributionStatus />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
