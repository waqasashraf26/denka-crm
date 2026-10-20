import React from 'react'
import Button from '../shared/Button'

const MeatingSchedulePopup = () => {

    const options = [
        { name: 'Select Product/Service', value: '' },
        { name: 'option 1', value: '1' },
        { name: 'option 2', value: '2' },
        { name: 'option 3', value: '3' },
    ]

    return (
        <div>
            <form action="" className='space-y-3 '>
                <div>
                    <p className='mb-1'>Meeting Title</p>
                    <input type="text" placeholder='Name' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <p className='mb-1'>Date and Time</p>
                    <input type="datetime-local" placeholder='Name' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <p className='mb-1'>Duration</p>
                    <input type="text" placeholder='Amount' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <p className='mb-1'>Agenda</p>
                    <input type="text" placeholder='Amount' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <p className='mb-1'>Meeting Link</p>
                    <input type="text" placeholder='Amount' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <div className='mb-2'>
                        <p className='mb-1'>Notes</p>
                        <textarea className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" rows={7} placeholder='Add Note Here'></textarea>
                    </div>
                    <Button label={'Save'} />
                </div>
            </form>
        </div>
    )
}

export default MeatingSchedulePopup
