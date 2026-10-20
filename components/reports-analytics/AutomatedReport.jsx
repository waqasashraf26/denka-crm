'use client'
import React, { useEffect, useState } from 'react'
import Button from '../shared/Button'
import Image from 'next/image'
import { PiDotsThreeVerticalBold } from 'react-icons/pi'
import Modal from '../shared/Modal'
import SalesRecordPopup from '../contact-management/SalesRecordPopup'
import { AutomatedReportTable, ContactManagementTable } from '@/data'
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import AutomatedReportPopup from './AutomatedReportPopup'

const AutomatedReport = () => {

    // const [openPopupIndex, setOpenPopupIndex] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => {
        setShowPopup(true)
    }

    const handleClosePopup = () => {
        setShowPopup(false)
    }

    // Handle clicking outside of the popup
    // const handleOutsideClick = (e) => {
    //     if (!e.target.closest('.popup-content')) {
    //         setOpenPopupIndex(null);
    //     }
    // };

    // const togglePopup = (index) => {
    //     if (openPopupIndex === index) {
    //         setOpenPopupIndex(null);
    //     } else {
    //         setOpenPopupIndex(index);
    //     }
    // };

    // useEffect(() => {
    //     if (openPopupIndex !== null) {
    //         document.addEventListener('click', handleOutsideClick);
    //     } else {
    //         document.removeEventListener('click', handleOutsideClick);
    //     }
    //     return () => {
    //         document.removeEventListener('click', handleOutsideClick);
    //     };
    // }, [openPopupIndex]);

    return (
        <div className='bg-white border border-borderGray rounded-lg'>
            <div className='w-full flex sm:flex-row flex-col sm:gap-0 gap-3 justify-between items-center p-2'>
                <p className='sm:w-[53%] w-full sm:text-start text-center sm:text-base text-xs'>Automatically generate comprehensive reports on   | | KPIs, sales performance, and forecasts.</p>
                <div className='w-fit'>
                <Button onClick={handleShowPopup} label={'Create New Report'} />
                </div>
            </div>

            {/* table section */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-t rounded-xl border-borderGray p-2">
                    <thead className="bg-gray-200">
                        <tr className='border-b border-borderGray bg-Cgreen'>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Report Name</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Description </th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Last Generated</th>
                            <th className="p-4 text-center sm:text-base text-sm whitespace-nowrap">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AutomatedReportTable.map((e, i) => (
                            <tr key={i} className={`${i < AutomatedReportTable.length - 1 ? 'border-b' : 'border-none'} border-borderGray`}>

                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.name}
                                </td>

                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.des}
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.date}
                                </td>

                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base gap-1 text-sm flex justify-center text-start relative">
                                    <button
                                        className='border border-borderGray p-1 px-2 w-fit rounded-lg'
                                    >
                                        <IoEyeOutline />
                                    </button>
                                    <button
                                        className='border border-borderGray flex items-center gap-1 p-1 px-1.5 w-fit rounded-lg'
                                    >
                                        Downlaod
                                        <MdOutlineFileDownload />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* popup */}
            <Modal label={'Add New Report'} isOpen={showPopup} onClose={handleClosePopup} >
                <AutomatedReportPopup />
            </Modal>
        </div>
    )
}

export default AutomatedReport
