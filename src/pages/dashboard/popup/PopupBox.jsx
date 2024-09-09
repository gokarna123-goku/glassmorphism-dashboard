import React from 'react'
import { FaX } from 'react-icons/fa6'

const PopupBox = () => {
    return (
        <div className='w-full border border-neutral-100/20 bg-transparent backdrop-blur-lg rounded-xl flex items-center justify-between py-3 px-4'>
            <div className="">
                <h1 className="text-base text-neutral-50 font-medium">
                    Want to build your own website?
                </h1>
            </div>
            <div className="flex items-center gap-x-5">
                <button className="w-fit px-3 py-1 rounded-full text-base text-neutral-50 font-normal bg-neutral-800/60">
                    Contact us
                </button>
                <button className="w-fit rounded-full text-xs text-neutral-200">
                    <FaX />
                </button>
            </div>
        </div>
    )
}

export default PopupBox