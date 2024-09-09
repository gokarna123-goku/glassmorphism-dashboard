import React from 'react'

const RootLayout = ({ children }) => {
    return (
        <main className='w-full h-screen bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden lg:px-28 md:px-16 sm:px-7 px-4' >
            {children}
        </main>
    )
}

export default RootLayout