import React from 'react'
import { TbBell, TbDeviceIpadMinus, TbSearch } from "react-icons/tb";
import { Link } from 'react-router-dom';


const SecondaryNav = () => {
    return (
        <nav className='w-full flex items-center justify-between border-b border-neutral-200/20 pb-2'>
            {/* Logo Section */}
            <Link to="/" className='text-xl text-neutral-50 flex items-center gap-x-2'>
                <TbDeviceIpadMinus />
                <span className='text-lg font-normal'>Admin</span>
            </Link>

            {/* Search and profile section */}
            <div className="flex items-center gap-x-5">
                {/* Search Section */}
                <div className="w-[350px] h-10 bg-neutral-950/20 rounded-md px-3 flex items-center gap-x-2 text-base text-neutral-50 font-normal">
                    <TbSearch className='text-neutral-100' />
                    <input type="text" placeholder="Search" className='w-full h-full bg-transparent outline-none placeholder:text-neutral-200' />
                </div>

                {/* Notification */}
                <div className="w-8 h-8 rounded-full bg-neutral-950/20 p-1 flex items-center justify-center cursor-pointer ease-in-out duration-300 text-lg text-neutral-100">
                    <TbBell className='text-xl' />
                </div>

                {/* Profile */}
                <Link to="/" className="w-8 h-8 rounded-full bg-neutral-950/20 p-1 flex items-center justify-center cursor-pointer ease-in-out duration-300">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="w-full h-full object-cover object-center" />
                </Link>
            </div>

        </nav>
    )
}

export default SecondaryNav