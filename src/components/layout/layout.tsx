import React from 'react';
import Navbar from './navbar';

// ts
interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className='flex flex-col items-center max-w-[1500px] m-auto overflow-hidden'>
            <Navbar />
            <div className="py-[var(--layout-p-y)] w-full">
                {children}
            </div>
        </div>
    )
}

export default Layout;