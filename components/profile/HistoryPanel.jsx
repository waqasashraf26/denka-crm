import React from 'react';
import Image from 'next/image';
import { HistoryPanelTable } from '@/data';


const HistoryPanel = () => {

    return (
        <div className=''>

            <div>
                <h1 className='font-bold md:text-2xl text-xl mb-2 text-[#212121]'>Timeline History Panel</h1>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto border border-borderGray rounded-xl">
                <table className="min-w-full bg-white border-t rounded-xl border-borderGray p-2">
                    <thead className="bg-gray-200">
                        <tr className='border-b border-borderGray bg-Cgreen'>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Interaction Type</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Date & Time</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Summry</th>
                        </tr>
                    </thead>
                    <tbody>
                        {HistoryPanelTable.map((e, i) => (
                            <tr key={i} className={`${i < HistoryPanelTable.length - 1 ? 'border-b' : 'border-none'} border-borderGray`}>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm flex items-center gap-2">
                                    <Image alt='' src={e.icon} className='' />
                                    <p>{e.type}</p>
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.dateTime}
                                </td>

                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.summary}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default HistoryPanel;
