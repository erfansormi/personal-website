import React from 'react';

// ts
interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="max-w-[1500px] p-4">
            {children}
        </div>
    )
}

export default Layout;