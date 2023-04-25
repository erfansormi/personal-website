import React from 'react';
import Navbar from './navbar';

// ts
interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <div className="max-w-[1500px] p-4">
                {children}
            </div>
        </>
    )
}

export default Layout;