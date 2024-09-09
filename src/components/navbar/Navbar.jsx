import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdSpaceDashboard, MdVideocam } from "react-icons/md";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='md:w-[6ch] w-full md:h-fit h-[8ch] py-4 rounded-full flex flex-col items-center justify-center backdrop-blur-md bg-neutral-200/10 border-2 border-neutral-200/15'>
            <ul className="list-none flex md:flex-col flex-row items-center gap-4">
                <li>
                    <Link to="/" className='w-8 h-8 p-1 rounded-full bg-neutral-300/20 flex items-center justify-center text-lg text-neutral-100 hover:text-neutral-200 hover:scale-110 ease-in-out duration-300'>
                        <MdSpaceDashboard className='' />
                    </Link>
                </li>
                <li>
                    <Link to="/" className='w-8 h-8 p-1 rounded-full hover:bg-neutral-300/20 flex items-center justify-center text-lg text-neutral-100 hover:text-neutral-200 hover:scale-110 ease-in-out duration-300'>
                        <FaCalendarAlt className='' />
                    </Link>
                </li>
                <li>
                    <Link to="/" className='w-8 h-8 p-1 rounded-full hover:bg-neutral-300/20 flex items-center justify-center text-lg text-neutral-100 hover:text-neutral-200 hover:scale-110 ease-in-out duration-300'>
                        <IoSettingsSharp className='' />
                    </Link>
                </li>
                <li>
                    <Link to="/" className='w-8 h-8 p-1 rounded-full hover:bg-neutral-300/20 flex items-center justify-center text-lg text-neutral-100 hover:text-neutral-200 hover:scale-110 ease-in-out duration-300'>
                        <MdVideocam className='' />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar