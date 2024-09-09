import React from 'react'

const RootLayout = ({ children }) => {
    return (
        <main className='w-full h-screen flex flex-col items-center justify-center relative overflow-hidden lg:p-14 md:p-12 sm:p-7 p-4' >
            {children}
        </main>
    )
}

export default RootLayout