import React from 'react'
import { IoEllipsisHorizontalOutline } from 'react-icons/io5'

const Interviews = () => {
    return (
        <div className='w-full bg-neutral-950/15 border border-neutral-900/20 rounded-xl p-4 space-y-4'>
            <div className="w-full flex items-center justify-between">
                <h1 className="text-base text-neutral-100 font-normal">
                    Scheduled Interviews
                </h1>
                <button className='text-base text-neutral-100'>
                    <IoEllipsisHorizontalOutline />
                </button>
            </div>
            {/*  */}
            <div className="space-y-5">
                <div className="space-y-3">
                    <p className="text-sm text-neutral-200 font-normal pb-1 border-b border-neutral-100/20">
                        Fri, 13th Sept
                    </p>
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-x-2.5">
                            <div className="w-10 h-10 rounded-full p-0.5 bg-neutral-50/10 flex items-center justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="w-full h-full object-cover object-center" />
                            </div>
                            <div className="space-y-0">
                                <h1 className="text-base text-neutral-50 font-medium">
                                    Interviewer Name
                                </h1>
                                <p className="text-xs text-neutral-100 font-normal">
                                    UI/UX Designer
                                </p>
                            </div>
                        </div>
                        <button className="bg-neutral-700/60 text-xs text-neutral-50 font-normal border border-neutral-700/40 rounded-full w-fit px-2 py-1 flex items-center justify-center">
                            Confirmed
                        </button>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-x-2.5">
                            <div className="w-10 h-10 rounded-full p-0.5 bg-neutral-50/10 flex items-center justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="w-full h-full object-cover object-center" />
                            </div>
                            <div className="space-y-0">
                                <h1 className="text-base text-neutral-50 font-medium">
                                    Interviewer Name
                                </h1>
                                <p className="text-xs text-neutral-100 font-normal">
                                    UI/UX Designer
                                </p>
                            </div>
                        </div>
                        <button className="bg-neutral-700/60 text-xs text-neutral-50 font-normal border border-neutral-700/40 rounded-full w-fit px-2 py-1 flex items-center justify-center">
                            Confirmed
                        </button>
                    </div>
                </div>

                <div className="space-y-3">
                    <p className="text-sm text-neutral-200 font-normal pb-1 border-b border-neutral-100/20">
                        Fri, 13th Sept
                    </p>
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-x-2.5">
                            <div className="w-10 h-10 rounded-full p-0.5 bg-neutral-50/10 flex items-center justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="w-full h-full object-cover object-center" />
                            </div>
                            <div className="space-y-0">
                                <h1 className="text-base text-neutral-50 font-medium">
                                    Interviewer Name
                                </h1>
                                <p className="text-xs text-neutral-100 font-normal">
                                    Full-Stack Developer
                                </p>
                            </div>
                        </div>
                        <button className="bg-neutral-700/60 text-xs text-neutral-50 font-normal border border-neutral-700/40 rounded-full w-fit px-2 py-1 flex items-center justify-center">
                            Re-Scheduled
                        </button>
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-x-2.5">
                            <div className="w-10 h-10 rounded-full p-0.5 bg-neutral-50/10 flex items-center justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="w-full h-full object-cover object-center" />
                            </div>
                            <div className="space-y-0">
                                <h1 className="text-base text-neutral-50 font-medium">
                                    Interviewer Name
                                </h1>
                                <p className="text-xs text-neutral-100 font-normal">
                                    UI/UX Designer
                                </p>
                            </div>
                        </div>
                        <button className="bg-neutral-700/60 text-xs text-neutral-50 font-normal border border-neutral-700/40 rounded-full w-fit px-2 py-1 flex items-center justify-center">
                            Re-Scheduled
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interviews
