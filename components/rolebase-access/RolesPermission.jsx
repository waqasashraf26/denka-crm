'use client'
import React, { useState } from 'react';
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import FilterButton from '../shared/FilterButton';
import SearchField from '../shared/SearchField';
import { RolesPermissionsTable } from '@/data';


const RolesPermission = () => {
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
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Role</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">View Account</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">View Contacts</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Contact Number</th>
                            <th className="p-4 text-center sm:text-base text-sm whitespace-nowrap">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RolesPermissionsTable.map((e, i) => (
                            <tr key={i} className={`${i < RolesPermissionsTable.length - 1 ? 'border-b' : 'border-none'} border-borderGray`}>

                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.role}
                                </td>

                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.viewAccount}
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.viewContact}
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
                                        <div className='absolute top-full right-0  bg-white border border-borderGray rounded-lg shadow-lg z-10 p-2 popup-content'>
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

export default RolesPermission;