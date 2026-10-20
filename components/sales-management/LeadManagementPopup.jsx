import React from 'react'
import Button from '../shared/Button'

const LeadManagementPopup = () => {

    const options = [
        { name: 'Select', value: '' },
        { name: 'option 1', value: '1' },
        { name: 'option 2', value: '2' },
        { name: 'option 3', value: '3' },
    ]

    return (
        <div>
            <form action="" className='space-y-3 '>
                <div>
                    <p className='mb-1'>Lead Name</p>
                    <input type="text" placeholder='Name' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <p className='mb-1'>Compnay Name</p>
                    <input type="text" placeholder='Name' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <p className='mb-1'>Contact Number</p>
                    <input type="text" placeholder='Number Here' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <p className='mb-1'>Email Address</p>
                    <input type="text" placeholder='Email' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <p className='mb-1'>Lead Source</p>
                    <select name="" id="" className="border w-full border-borderGray rounded-lg outline-none px-3 py-2">
                        {
                            options.map((e, i) => (
                                <option key={i} value={e.value}>{e.name}</option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <div className='mb-2'>
                        <p className='mb-1'>Notes</p>
                        <textarea className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" rows={5} placeholder='Add Note Here'></textarea>
                    </div>
                    <Button label={'Save'} />
                </div>
            </form>
        </div>
    )
}

export default LeadManagementPopup
