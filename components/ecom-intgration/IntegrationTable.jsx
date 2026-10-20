'use client'
import React, { useState } from 'react';
import { ContactManagementTable, IntegrationTableData, TrackingTableData } from '@/data';
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { FiSearch } from 'react-icons/fi';
import FilterButton from '../shared/FilterButton';
import SearchField from '../shared/SearchField';


const IntegrationTable = () => {

    const [openPopupIndex, setOpenPopupIndex] = useState(null);
    // const [showPopup, setShowPopup] = useState(false);

    // const handleShowPopup = () => {
    //     setShowPopup(true)
    // }

    // const handleClosePopup = () => {
    //     setShowPopup(false)
    // }

    // Handle clicking outside of the popup
    const handleOutsideClick = (e) => {
        if (!e.target.closest('.popup-content')) {
            setOpenPopupIndex(null);
        }
    };

    const togglePopup = (index) => {
        if (openPopupIndex === index) {
            setOpenPopupIndex(null);
        } else {
            setOpenPopupIndex(index);
        }
    };

    React.useEffect(() => {
        if (openPopupIndex !== null) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [openPopupIndex]);

    return (
        <div className='border border-borderGray rounded-xl'>
            {/* filter and buttons */}
            <div className='flex items-center sm:flex-row flex-col justify-between w-full gap-4 p-3'>
                <p className='sm:w-[53%] w-full sm:text-start text-center sm:text-base text-xs'>Automated system to send follow-up emails    to customers who have abandoned their carts.</p>
                <div className='flex items-center gap-2 flex-1 justify-end'>
                    <FilterButton />
                    <SearchField/>
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-t rounded-xl border-borderGray p-2">
                    <thead className="bg-gray-200">
                        <tr className='border-b border-borderGray bg-Cgreen'>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Order ID</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Date</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Amount</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Customer</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Email Sent</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Status</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {IntegrationTableData.map((e, i) => (
                            <tr key={i} className={`${i < IntegrationTableData.length - 1 ? 'border-b' : 'border-none'} border-borderGray`}>

                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.id}
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.date}
                                </td>

                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.amount}
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.customer}
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.sent}
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    <div className={`px-2 text-center w-[90px] py-1 rounded-lg ${e.status === 'Paid' ? 'bg-[#4BB81726]' : e.status === 'UnPaid' ? 'bg-[#CFCFCF26]' : e.status === 'Left Cart' ? 'bg-[#FFAE4C1A]' : 'bg-[#8979FF0A]'} `}>
                                        {e.status}
                                    </div>
                                </td>

                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm flex justify-center text-start relative">
                                    <button
                                        className='border border-borderGray p-1 w-fit rounded-lg'
                                        onClick={() => togglePopup(i)}
                                    >
                                        <PiDotsThreeVerticalBold />
                                    </button>
                                    {openPopupIndex === i && (
                                        <div className='absolute top-full right-0 mt-2 bg-white border border-borderGray rounded-lg shadow-lg z-10 p-2 popup-content'>
                                            <p className='cursor-pointer hover:bg-gray-100 p-2 rounded'>Edit</p>
                                            <p className='cursor-pointer hover:bg-gray-100 p-2 rounded'>Delete</p>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* popup */}
            {/* <Modal label={'Add Sales Record'} isOpen={showPopup} onClose={handleClosePopup} >
                <SalesRecordPopup />
            </Modal> */}
        </div>
    );
};

export default IntegrationTable;
