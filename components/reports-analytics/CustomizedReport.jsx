'use client'
import React, { useState } from 'react'
import Modal from '../shared/Modal'
import { AutomatedReportTable, ContactManagementTable } from '@/data'
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import AutomatedReportPopup from './AutomatedReportPopup'
import { MdOutlineCalendarMonth } from "react-icons/md";

const CustomizedReport = () => {

    // const [openPopupIndex, setOpenPopupIndex] = useState(null);
    // const [showPopup, setShowPopup] = useState(false);

    // const handleClosePopup = () => {
    //     setShowPopup(false)
    // }

    const options = [
        { name: 'Select Criteria', value: '' },
        { name: 'option 1', value: '1' },
        { name: 'option 2', value: '2' },
        { name: 'option 3', value: '3' },
    ]

    const options2 = [
        { name: 'PDF', value: '' },
        { name: 'option 1', value: '1' },
        { name: 'option 2', value: '2' },
        { name: 'option 3', value: '3' },
    ]

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
            <div className='w-full flex xl:flex-row flex-col xl:gap-0 gap-3 justify-between items-center p-2'>
                <p className='xl:w-[30%] sm:w-[50%] w-full xl:text-start text-center sm:text-base text-xs'>Create tailored reports by selecting specific    date ranges and criteria.</p>
                <div className='flex items-center sm:w-fit w-full sm:flex-row flex-col gap-3'>
                    <div className='flex items-center gap-1 sm:w-auto w-full'>
                        <button
                            className='border border-borderGray lg:text-base justify-between text-sm flex items-center gap-2 p-2 px-3 sm:w-fit w-full rounded-lg'
                        >
                            12 jan, 2025
                            <MdOutlineCalendarMonth />
                        </button>
                        -
                        <button
                            className='border border-borderGray lg:text-base justify-between text-sm flex items-center gap-2 p-2 px-3 sm:w-fit w-full rounded-lg'
                        >
                            16 jan, 2025
                            <MdOutlineCalendarMonth />
                        </button>
                    </div>

                    <div className='flex items-center gap-3 sm:w-auto w-full'>
                        <div className='sm:w-fit w-full'>
                            <select name="" id="" className="border w-full lg:text-base text-sm border-borderGray rounded-lg outline-none px-3 py-2">
                                {
                                    options.map((e, i) => (
                                        <option key={i} value={e.value}>{e.name}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className='sm:w-fit w-full'>
                            <select name="" id="" className="border w-full lg:text-base text-sm border-borderGray rounded-lg outline-none px-3 py-2">
                                {
                                    options2.map((e, i) => (
                                        <option key={i} value={e.value}>{e.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
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
            {/* <Modal label={'Add New Report'} isOpen={showPopup} onClose={handleClosePopup} >
                <AutomatedReportPopup />
            </Modal> */}
        </div>
    )
}

export default CustomizedReport
