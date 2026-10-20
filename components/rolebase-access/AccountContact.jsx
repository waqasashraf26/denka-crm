'use client'
import React, { useState } from 'react';
import { AccountContactTable } from '@/data';
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import FilterButton from '../shared/FilterButton';
import SearchField from '../shared/SearchField';


const AccountContact = () => {
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
            <div className='flex items-center sm:flex-row flex-col justify-between p-4 gap-3 w-full'>
                <FilterButton />
                <SearchField />
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-t rounded-xl border-borderGray p-2">
                    <thead className="">
                        <tr className='border-b border-borderGray bg-Cgreen'>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Account ID</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Account Name</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Contact Name</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Contact Number</th>
                            <th className="p-4 text-center sm:text-base text-sm whitespace-nowrap">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AccountContactTable.map((e, i) => (
                            <tr key={i} className={`${i < AccountContactTable.length - 1 ? 'border-b' : 'border-none'} border-borderGray`}>

                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.accountId}
                                </td>

                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.accountName}
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.contactName}
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.number}
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

export default AccountContact;