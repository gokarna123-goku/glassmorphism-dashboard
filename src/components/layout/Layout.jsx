import React from 'react'

const Layout = ({ children, className }) => {
    return (
        <div className={`flex-1 h-[calc(100vh-8ch)] backdrop-blur bg-neutral-200/15 rounded-xl border-2 border-neutral-200/25 p-4 ${className}`}>
            {children}
        </div>
    )
}

export default Layout