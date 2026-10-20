import React from 'react'
import Button from '../shared/Button'

const TaskManagementPopup = () => {

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
                    <p className='mb-1'>Task Title</p>
                    <input type="text" placeholder='Write here' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <p className='mb-1'>Assign To</p>
                    <input type="date" placeholder='Write here' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <p className='mb-1'>Due Date</p>
                    <input type="date" placeholder='Write here' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <p className='mb-1'>Peiority</p>
                    <select name="" id="" className="border w-full border-borderGray rounded-lg outline-none px-3 py-2">
                        {
                            options.map((e, i) => (
                                <option key={i} value={e.value}>{e.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <p className='mb-1'>Status</p>
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

export default TaskManagementPopup
