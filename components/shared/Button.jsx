import React from 'react'

const Button = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className='w-full py-2.5 bg-mainBlue px-4 text-white rounded-md'>
            {label}
        </button>
    )
}

export default Button
