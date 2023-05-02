import React from 'react';

// css
import styles from "./content.module.css";

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='relative w-full overflow-y-scroll content-height'>
            {/* underside background content */}
            <div
                className={`fixed h-[inherit] z-[-1] dark:bg-dark-700 bg-dark-400 start-0 end-0 lg:end-[var(--layout-p-x)] lg:start-[var(--layout-p-x)]`}
            >
                <div className={`dark:after:bg-[rgba(30,30,40,.90)] after:bg-[rgba(238,241,255,.85)] h-[430px] ${styles.underside_bg} rounded-e-md`}>
                </div>
            </div>

            {/* sections */}
            <div className='flex-col flex gap-y-14 md:px-8'>
                {children}
            </div>
        </div>
    )
}

export default ContentContainer;