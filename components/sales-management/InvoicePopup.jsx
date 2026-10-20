import React from 'react'
import Button from '../shared/Button'

const InvoicePopup = () => {

  
    return (
        <div>
            <form action="" className='space-y-3 '>
                <div>
                    <p className='mb-1'>Invoice Number</p>
                    <input type="text" placeholder='Write here' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <p className='mb-1'>Due Date</p>
                    <input type="date" placeholder='Name' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <p className='mb-1'>Client Name</p>
                    <input type="text" placeholder='Write here' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <p className='mb-1'>Contact Number</p>
                    <input type="text" placeholder='Write here' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <p className='mb-1'>Amount</p>
                    <input type="text" placeholder='Write here' className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" />
                </div>

                <div>
                    <div className='mb-2'>
                        <p className='mb-1'>Payment Terms</p>
                        <textarea className='border w-full border-borderGray rounded-lg outline-none px-3 py-2' name="" id="" rows={5} placeholder='Add Payment Terms'></textarea>
                    </div>
                    <Button label={'Save'} />
                </div>
            </form>
        </div>
    )
}

export default InvoicePopup
