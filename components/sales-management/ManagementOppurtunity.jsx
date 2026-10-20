import { OpputunityClosedData, OpputunityInProgressData, OpputunityNegotiationData, OpputunityNewData, OpputunityPerposalData } from '@/data'
import React from 'react'

const ManagementOppurtunity = () => {
    return (
        <div className='grid grid-cols-5 w-full min-w-[1200px]  whitespace-nowrap  gap-4'>

            {/* New Cards */}
            <div className=''>
                <div className='bg-[#ECF2EA] text-[#4BB817] text-start px-4 py-2 rounded-md' >
                    New
                </div>
                <div className='mt-4'>
                    {
                        OpputunityNewData.map((e, i) => (
                            <div key={i} className='border border-borderGray space-y-3 rounded-lg p-3 mt-4' >
                                <div className='flex items-center gap-2'>
                                    <div className={`py-1 px-3 rounded-lg text-white`} style={{ backgroundColor: e.JColor }} >J</div>
                                    <div>
                                        <h1 className='font-medium leading-4' >{e.name}</h1>
                                        <p className='text-secondary text-[8px]' >{e.email}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-1'>
                                        <p className='text-secondary text-[10px]'>Opportunity Name: </p>
                                        <p className='text-black text-[10px] font-medium'>{e.oprtName}</p>
                                    </div>
                                    <div className='flex gap-1 mt-1'>
                                        <p className='text-secondary text-[10px]'>Company: </p>
                                        <p className='text-black text-[10px] font-medium'>{e.company}</p>
                                    </div>
                                </div>
                                <div className='flex gap-1'>
                                    <p className='text-black font-medium'>Value: </p>
                                    <p className='text-black font-medium'>{e.value}</p>
                                </div>
                                <div className='flex gap-1'>
                                    <p className='text-secondary text-[10px]'>Expected Close Date: </p>
                                    <p className='text-secondary text-[10px]'>{e.closeDate}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* in progress cards */}
            <div>
                <div className='bg-[#DFF0FA] text-[#09659B] text-start px-4 py-2 rounded-md' >
                    In Progress
                </div>
                <div className='mt-4'>
                    {
                        OpputunityInProgressData.map((e, i) => (
                            <div key={i} className='border border-borderGray space-y-3 rounded-lg p-3 mt-4' >
                                <div className='flex items-center gap-2'>
                                    <div className={`py-1 px-3 rounded-lg text-white`} style={{ backgroundColor: e.JColor }} >J</div>
                                    <div>
                                        <h1 className='font-medium leading-4' >{e.name}</h1>
                                        <p className='text-secondary text-[8px]' >{e.email}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-1'>
                                        <p className='text-secondary text-[10px]'>Opportunity Name: </p>
                                        <p className='text-black text-[10px] font-medium'>{e.oprtName}</p>
                                    </div>
                                    <div className='flex gap-1 mt-1'>
                                        <p className='text-secondary text-[10px]'>Company: </p>
                                        <p className='text-black text-[10px] font-medium'>{e.company}</p>
                                    </div>
                                </div>
                                <div className='flex gap-1'>
                                    <p className='text-black font-medium'>Value: </p>
                                    <p className='text-black font-medium'>{e.value}</p>
                                </div>
                                <div className='flex gap-1'>
                                    <p className='text-secondary text-[10px]'>Expected Close Date: </p>
                                    <p className='text-secondary text-[10px]'>{e.closeDate}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* proposal sent cards */}
            <div>
                <div className='bg-[#E3FFFC] text-[#009182] text-start px-4 py-2 rounded-md' >
                    Proposal Sent
                </div>
                <div className='mt-4'>
                    {
                        OpputunityPerposalData.map((e, i) => (
                            <div key={i} className='border border-borderGray space-y-3 rounded-lg p-3 mt-4' >
                                <div className='flex items-center gap-2'>
                                    <div className={`py-1 px-3 rounded-lg text-white`} style={{ backgroundColor: e.JColor }} >J</div>
                                    <div>
                                        <h1 className='font-medium leading-4' >{e.name}</h1>
                                        <p className='text-secondary text-[8px]' >{e.email}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-1'>
                                        <p className='text-secondary text-[10px]'>Opportunity Name: </p>
                                        <p className='text-black text-[10px] font-medium'>{e.oprtName}</p>
                                    </div>
                                    <div className='flex gap-1 mt-1'>
                                        <p className='text-secondary text-[10px]'>Company: </p>
                                        <p className='text-black text-[10px] font-medium'>{e.company}</p>
                                    </div>
                                </div>
                                <div className='flex gap-1'>
                                    <p className='text-black font-medium'>Value: </p>
                                    <p className='text-black font-medium'>{e.value}</p>
                                </div>
                                <div className='flex gap-1'>
                                    <p className='text-secondary text-[10px]'>Expected Close Date: </p>
                                    <p className='text-secondary text-[10px]'>{e.closeDate}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Negotiation cards  */}
            <div>
                <div className='bg-[#FFBA861F] text-[#B55D1B] text-start px-4 py-2 rounded-md' >
                    Negotiation
                </div>
                <div className='mt-4'>
                    {
                        OpputunityNegotiationData.map((e, i) => (
                            <div key={i} className='border border-borderGray space-y-3 rounded-lg p-3 mt-4' >
                                <div className='flex items-center gap-2'>
                                    <div className={`py-1 px-3 rounded-lg text-white`} style={{ backgroundColor: e.JColor }} >J</div>
                                    <div>
                                        <h1 className='font-medium leading-4' >{e.name}</h1>
                                        <p className='text-secondary text-[8px]' >{e.email}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-1'>
                                        <p className='text-secondary text-[10px]'>Opportunity Name: </p>
                                        <p className='text-black text-[10px] font-medium'>{e.oprtName}</p>
                                    </div>
                                    <div className='flex gap-1 mt-1'>
                                        <p className='text-secondary text-[10px]'>Company: </p>
                                        <p className='text-black text-[10px] font-medium'>{e.company}</p>
                                    </div>
                                </div>
                                <div className='flex gap-1'>
                                    <p className='text-black font-medium'>Value: </p>
                                    <p className='text-black font-medium'>{e.value}</p>
                                </div>
                                <div className='flex gap-1'>
                                    <p className='text-secondary text-[10px]'>Expected Close Date: </p>
                                    <p className='text-secondary text-[10px]'>{e.closeDate}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* closed cards */}
            <div>
                <div className='bg-[#F8E7E7] text-[#CD1A1A] text-start px-4 py-2 rounded-md' >
                    Closed
                </div>
                <div className='mt-4'>
                    {
                        OpputunityClosedData.map((e, i) => (
                            <div key={i} className='border border-borderGray space-y-3 rounded-lg p-3 mt-4' >
                                <div className='flex items-center gap-2'>
                                    <div className={`py-1 px-3 rounded-lg text-white`} style={{ backgroundColor: e.JColor }} >J</div>
                                    <div>
                                        <h1 className='font-medium leading-4' >{e.name}</h1>
                                        <p className='text-secondary text-[8px]' >{e.email}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-1'>
                                        <p className='text-secondary text-[10px]'>Opportunity Name: </p>
                                        <p className='text-black text-[10px] font-medium'>{e.oprtName}</p>
                                    </div>
                                    <div className='flex gap-1 mt-1'>
                                        <p className='text-secondary text-[10px]'>Company: </p>
                                        <p className='text-black text-[10px] font-medium'>{e.company}</p>
                                    </div>
                                </div>
                                <div className='flex gap-1'>
                                    <p className='text-black font-medium'>Value: </p>
                                    <p className='text-black font-medium'>{e.value}</p>
                                </div>
                                <div className='flex gap-1'>
                                    <p className='text-secondary text-[10px]'>Expected Close Date: </p>
                                    <p className='text-secondary text-[10px]'>{e.closeDate}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default ManagementOppurtunity
