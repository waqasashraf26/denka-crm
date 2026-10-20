import React from 'react'
import logo from '@/public/assets/images/denkaLogo.svg'
import Image from 'next/image'
import { LuSearch } from "react-icons/lu";
import { SidebarMenu1, SidebarMenu2, SidebarMenu3 } from '@/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Sidebar = () => {

    const pathName = usePathname();

    return (
        <div className='bg-Cgreen text-gray flex flex-col justify-between items-center gap-4 h-full max-h-[900px] p-4  w-full'>
            <div className='w-full flex flex-col items-center'>
                <div>
                    <Image alt='' src={logo} />
                </div>
                <div className='mt-4 border border-borderGray px-3 py-2 rounded-lg bg-white w-full flex items-center gap-2' >
                    <LuSearch className="text-lg" />
                    <input type="text" className='bg-transparent outline-none ' placeholder='Search' name="" id="" />
                </div>
            </div>

            <div className='w-full flex flex-col items-center'>
                <div className='py-5 w-full'>
                    <p className='text-sm'>Core CRM Functions</p>
                    <div className='mt-3 flex flex-col gap-1'>
                        {
                            SidebarMenu1.map((e, i) => (
                                <Link href={e.src} className={`flex items-center gap-3 p-2 w-full ${pathName === e.src ? 'border border-mainBlue rounded-lg bg-[#F0EDFF]' : 'bg-transparent'}`} key={i} >
                                    <Image alt='' src={e.icon} />
                                    <p>{e.name}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <hr className='border border-borderGray w-full my-1' />

                <div className='py-5 w-full'>
                    <p className='text-sm'>Analytical and Reporting</p>
                    <div className='mt-3 flex flex-col gap-1'>
                        {
                            SidebarMenu2.map((e, i) => (
                                <Link href={e.src} className={`flex items-center gap-2 p-2 w-full ${pathName === e.src ? 'border border-mainBlue rounded-lg bg-[#F0EDFF]' : 'bg-transparent'}`} key={i} >
                                    <Image alt='' src={e.icon} />
                                    <p>{e.name}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <hr className='border border-borderGray w-full my-1' />

                <div className='py-5 w-full'>
                    <p className='text-sm'>Integrations and Support Functions</p>
                    <div className='mt-3 flex flex-col gap-1'>
                        {
                            SidebarMenu3.map((e, i) => (
                                <Link href={e.src} className={`flex items-center gap-2 p-2 w-full ${pathName === e.src ? 'border border-mainBlue rounded-lg bg-[#F0EDFF]' : 'bg-transparent'}`} key={i} >
                                    <Image alt='' src={e.icon} />
                                    <p>{e.name}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
