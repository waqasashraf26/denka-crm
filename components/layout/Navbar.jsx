import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Button from '../shared/Button'
import bell from '@/public/assets/icons/bell.svg'
import profile from '@/public/assets/images/profile.png'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { SidebarMenu1, SidebarMenu2, SidebarMenu3 } from '@/data'
import Modal from '../shared/Modal'
import BlogPopup from '../dashboard/BlogPopup'
import Link from 'next/link'


const Navbar = ({ toggleSidebar }) => {

    const [open, setOepn] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const pathName = usePathname()

    const handleToggle = () => {
        setOepn((prev) => !prev)
    }

    const handleShowPopup = () => {
        setShowPopup(true)
    }

    const handleClosePopup = () => {
        setShowPopup(false)
    }

    // combine all menus
    const menus = [...SidebarMenu1, ...SidebarMenu2, ...SidebarMenu3];

    // find the active menu
    const activeMenu = menus.find(menu => menu.src === pathName)

    return (
        <div className='bg-white  p-3 w-full h-full flex items-center justify-between border-b border-[#F2F2F2]' >
            <div className='md:w-[45%] w-auto '>
                <h1 className='lg:text-2xl text-xl font-bold text-primary' >
                    {activeMenu && activeMenu.name}
                </h1>
                {
                    pathName === '/dashboard/profile' && <h1 className='lg:text-2xl text-xl font-bold text-primary'>Profile</h1>
                }
            </div>

            <div className={`md:flex hidden ${pathName === '/dashboard' ? 'w-full' : 'w-[50%]'}  justify-end items-center gap-5`}>
                {
                    pathName === '/dashboard' ?
                        <div className='w-fit md:block hidden whitespace-nowrap'>
                            <Button onClick={handleShowPopup} label={'+Add Blog'} />
                        </div> : ''
                }
                <div className='flex items-center gap-3 w-fit'>
                    <div className='bg-[#F4F4F4] p-2 rounded-lg'>
                        <Image alt='' src={bell} className='w-5 h-full' />
                    </div>
                    <div onClick={handleToggle} className='flex items-center gap-2 w-full relative cursor-pointer'>
                        <Image alt='' src={profile} />
                        <div  className='flex w-full items-start gap-1 '>
                            <div className=''>
                                <h1 className='text-primary font-medium leading-tight'>William John</h1>
                                <p className='text-secondary'>Businessmen</p>
                            </div>
                            <IoIosArrowDown className="text-secondary text-xl mt-1" />

                            {
                                open &&
                                <div className='bg-white text-primary shadow-xl flex flex-col items-center gap-2 rounded-lg p-2 px-4 absolute top-12 left-0 w-full ' >
                                    <Link href={'/dashboard/profile'} className='hover:bg-gray w-full py-1 rounded-lg text-center hover:text-white'>Profile</Link>
                                    <Link href={''} className='hover:bg-gray w-full py-2 rounded-lg text-center hover:text-white'>Logout</Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                pathName === '/dashboard' ?
                    <div className='w-fit md:hidden block whitespace-nowrap '>
                        <Button onClick={handleShowPopup} label={'+Add Blog'} />
                    </div> : ''
            }
            <button className='block md:hidden text-xl' onClick={toggleSidebar}>
                <RiMenu3Fill className='text-xl' />
            </button>

            {/* popup */}
            <Modal label={'Add Blog'} isOpen={showPopup} onClose={handleClosePopup}>
                <BlogPopup />
            </Modal>

        </div>
    )
}

export default Navbar
