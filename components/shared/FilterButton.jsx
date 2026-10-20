import React from 'react'
import filter from '@/public/assets/icons/filterIcon.svg';
import Image from 'next/image';

const FilterButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className='border border-borderGray rounded-lg sm:w-auto justify-center w-full px-4 py-2 flex gap-2 items-center'>
            <Image alt='' src={filter} />
            <p className=''>Filter</p>
        </button>
    )
}

export default FilterButton
