import { kpiSummaryCardsData } from '@/data'
import React from 'react'
import ProgressBar from '../shared/ProgressBar'

const SummaryCards = () => {
    return (
        <div>
            <h1 className='xl:text-2xl text-xl font-bold'>KPI Dashboard Summary Cards</h1>
            <div className='mt-3 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                {
                    kpiSummaryCardsData.map((e, i) => (
                        <div key={i} className='border border-borderGray p-3 flex flex-col gap-2 items-start rounded-lg' >
                            <h1 className='xl:text-2xl text-xl font-medium'>{e.name}</h1>
                            <p className='leading-tight'>Current Value: <span>{e.curretValue}</span></p>
                            <p className='leading-tight'>Target: <span>{e.target}</span></p>
                            <ProgressBar progress={e.progress} bgColor={e.progressColor} />
                            <p><span className='font-medium'>Description:</span>
                                {e.des}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SummaryCards
