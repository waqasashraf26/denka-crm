import React from 'react'
import SummaryCards from './SummaryCards'
import KpiChart from './KpiChart'
import TrackingTable from './TrackingTable'

const PerformanceGoals = () => {
    return (
        <div className='bg-white p-4 space-y-5'>
            <div className='border border-borderGray p-3 rounded-lg' >
                <SummaryCards />
            </div>
            <div  >
                <KpiChart />
            </div>
            <div>
                <TrackingTable/>
            </div>
        </div>
    )
}

export default PerformanceGoals
