import React from 'react'
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { RiUser2Fill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa6";


const Employee = () => {
    return (
        <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-6'>
            {/* Employee Card1 */}
            <div className="w-full bg-neutral-950/15 border border-neutral-900/20 rounded-xl p-4 space-y-4">
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-base text-neutral-100 font-normal">
                        Total No. of Employee
                    </h1>
                    <button className='text-base text-neutral-100'>
                        <IoEllipsisHorizontalOutline />
                    </button>
                </div>
                <div className="w-full flex items-end justify-between">
                    <div className="flex items-center gap-x-2.5">
                        <div className="w-14 h-14 rounded-lg p-0.5 bg-neutral-50/10 flex items-center justify-center">
                            <FaUserTie className='text-3xl text-violet-300' />
                        </div>
                        <div className='space-y-0'>
                            <h1 className="text-3xl text-neutral-50 font-bold">
                                700
                            </h1>
                            <p className="text-xs text-neutral-300 font-normal">
                                last month: 554
                            </p>
                        </div>
                    </div>
                    <div className="bg-green-500/40 text-xs text-neutral-50 font-normal border border-green-500/40 rounded-full w-fit px-1.5 py-0.5 flex items-center justify-center">
                        +15%
                    </div>
                </div>
            </div>

            {/* Employee Card1 */}
            <div className="w-full bg-neutral-950/15 border border-neutral-900/20 rounded-xl p-4 space-y-4">
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-base text-neutral-100 font-normal">
                        New Employees
                    </h1>
                    <button className='text-base text-neutral-100'>
                        <IoEllipsisHorizontalOutline />
                    </button>
                </div>
                <div className="w-full flex items-end justify-between">
                    <div className="flex items-center gap-x-2.5">
                        <div className="w-14 h-14 rounded-lg p-0.5 bg-neutral-50/10 flex items-center justify-center">
                            <RiUser2Fill className='text-4xl text-violet-300' />
                        </div>
                        <div className='space-y-0'>
                            <h1 className="text-3xl text-neutral-50 font-bold">
                                125
                            </h1>
                            <p className="text-xs text-neutral-300 font-normal">
                                last month: 100
                            </p>
                        </div>
                    </div>
                    <div className="bg-red-500/40 text-xs text-neutral-50 font-normal border border-red-500/40 rounded-full w-fit px-1.5 py-0.5 flex items-center justify-center">
                        -20%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee
