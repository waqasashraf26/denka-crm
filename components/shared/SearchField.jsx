import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchField = ({ onClick }) => {
    return (
        <div className='flex items-center gap-1 bg-Cgreen sm:w-auto w-full sm:px-4 px-3 py-2 rounded-lg'>
            <FiSearch className='text-secondary' />
            <input onClick={onClick} type="text" placeholder='Search here' className=' w-full outline-none bg-transparent px-1' name="" id="" />
        </div>
    )
}

export default SearchField
