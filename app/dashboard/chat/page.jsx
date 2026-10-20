import ChatBox from '@/components/chat/ChatBox'
import Groups from '@/components/chat/Groups'
import React from 'react'

const Page = () => {
  return (
    <div className='bg-white p-4 flex  items-stretch lg:gap-4 gap-10 lg:flex-row flex-col-reverse' >
      <div className='xl:w-[43%] lg:w-[45%] w-full' >
        <Groups/>
      </div>
      <div className='xl:w-[57%] lg:w-[55%] w-full' >
        <ChatBox/>
      </div>
    </div>
  )
}

export default Page
