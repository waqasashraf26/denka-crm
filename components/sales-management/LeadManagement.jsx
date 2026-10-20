'use client'
import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import Button from '../shared/Button';
import Image from 'next/image';
import { LeadManagementTable } from '@/data';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';
import Modal from '../shared/Modal';
import SalesRecordPopup from '../contact-management/SalesRecordPopup';
import LeadManagementPopup from './LeadManagementPopup';
import SearchField from '../shared/SearchField';

const LeadManagement = () => {

    const [openPopupIndex, setOpenPopupIndex] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => {
        setShowPopup(true)
    }

    const handleClosePopup = () => {
        setShowPopup(false)
    }

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

    useEffect(() => {
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
        <div className='border border-borderGray rounded-xl' >
            <div className='w-full flex justify-between sm:flex-row sm:gap-0 gap-4 flex-col items-center p-3'>
            <div className='xl:w-[20%] sm:w-auto w-full' >
                    <SearchField />
                </div>
                <div className='sm:w-fit w-full'>
                    <Button onClick={handleShowPopup} label={'+Add New Lead'} />
                </div>
            </div>

            {/* table sections */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-t rounded-xl border-borderGray p-2">
                    <thead className="bg-gray-200">
                        <tr className='border-b border-borderGray bg-Cgreen'>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Lead Name</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Company</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Contact Info</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Status</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Last Contacted</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {LeadManagementTable.map((e, i) => (
                            <tr key={i} className={`${i < LeadManagementTable.length - 1 ? 'border-b' : 'border-none'} border-borderGray`}>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm">
                                    <div className="flex items-center gap-2">
                                        <Image alt='' src={e.userImg} className='' />
                                        <p>{e.name}</p>
                                    </div>
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm">
                                    <div className="flex items-center gap-2">
                                        <Image alt='' src={e.logo} className='' />
                                        <p>{e.company}</p>
                                    </div>
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.phone}
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap flex justify-center w-[170px] sm:text-base text-sm text-start">
                                    <div className={`px-6 text-center w-full py-1.5 rounded-lg ${e.status === 'New' ? 'bg-[#8979FF3D]' : 'bg-[#4BB81726]'} `}>
                                        {e.status}
                                    </div>
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.lastContact}
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
            <Modal label={'Add Sales Record'} isOpen={showPopup} onClose={handleClosePopup} >
                <LeadManagementPopup />
            </Modal>
        </div>
    )
}

export default LeadManagement
