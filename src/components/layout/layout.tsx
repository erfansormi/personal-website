import React from 'react';
import Navbar from './navbar';
import ContentContainer from './content/contentContainer';
import SidebarContainer from './sidebar/sidebarContainer';

// ts
interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className='flex flex-col items-center max-w-[1500px] m-auto overflow-hidden'>
            <Navbar />
            <div className="py-[var(--layout-p-y)] lg:px-[var(--layout-p-x)] px-4 w-full">
                <div className='flex'>

                    {/* sidebar */}
                    <aside className='max-w-[var(--sidebar-width)] w-full lg:block hidden shadow-md'>
                        <SidebarContainer />
                    </aside>

                    {/* content */}
                    <div className='w-full'>
                        <ContentContainer>
                            {children}
                        </ContentContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;