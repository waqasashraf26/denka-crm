'use client'
import React, { useState } from 'react';
import filter from '@/public/assets/icons/filterIcon.svg';
import sort from '@/public/assets/icons/sortIcon.svg';
import Image from 'next/image';
import Button from '../shared/Button';
import { ContactManagementTable } from '@/data';
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import Modal from '../shared/Modal';
import SalesRecordPopup from './SalesRecordPopup';
import FilterButton from '../shared/FilterButton';


const Table = () => {
    const [activeButton, setActiveButton] = useState('B2B');
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
            <div className='flex items-center lg:flex-row flex-col justify-between w-full lg:gap-0 gap-4 p-3'>
                <div className='flex items-center justify-end gap-4 p-2 xl:w-[20%] lg:w-[25%] sm:w-1/2 w-full bg-[#FAFBFB] outline-none rounded-lg'>
                    <button
                        className={`w-full px-4 py-1 rounded-md ${activeButton === 'B2B' ? 'bg-white' : ''}`}
                        onClick={() => setActiveButton('B2B')}
                    >
                        B2B
                    </button>
                    <button
                        className={`w-full px-4 py-1 rounded-md ${activeButton === 'B2C' ? 'bg-white' : ''}`}
                        onClick={() => setActiveButton('B2C')}
                    >
                        B2C
                    </button>
                </div>

                <div className='flex items-center gap-2 lg:w-[60%] w-full sm:flex-row flex-col lg:justify-end justify-center'>
                   <FilterButton/>
                    <button className='border border-borderGray rounded-lg sm:w-auto justify-center w-full px-4 py-2 flex gap-2 items-center'>
                        <Image alt='' src={sort} />
                        <p className=''>Sort By</p>
                    </button>
                    <div className=' sm:w-fit w-full'>
                        <Button onClick={handleShowPopup} label={'+Add Sales Record'} />
                    </div>
                </div> 
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-t rounded-xl border-borderGray p-2">
                    <thead className="bg-gray-200">
                        <tr className='border-b border-borderGray bg-Cgreen'>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Contact Name</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Email Address</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Company</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Phone Number</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Address</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Status</th>
                            <th className="p-4 text-start sm:text-base text-sm whitespace-nowrap">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ContactManagementTable.map((e, i) => (
                            <tr key={i} className={`${i < ContactManagementTable.length - 1 ? 'border-b' : 'border-none'} border-borderGray`}>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm flex items-center gap-2">
                                    <Image alt='' src={e.userImg} className='' />
                                    <p>{e.name}</p>
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.email}
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm flex items-start gap-2">
                                    <Image alt='' src={e.logo} className='' />
                                    <p>{e.company}</p>
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.phone}
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    {e.adress}
                                </td>
                                <td className="px-4 sm:pr-4 pr-6 py-2 whitespace-nowrap sm:text-base text-sm text-start">
                                    <div className={`px-3 py-1 rounded-lg ${e.status === 'B2B' ? 'bg-[#8979FF24]' : 'bg-[#D5CBC621]'} `}>
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
            <Modal label={'Add Sales Record'} isOpen={showPopup} onClose={handleClosePopup} >
                <SalesRecordPopup />
            </Modal>
        </div>
    );
};

export default Table;
