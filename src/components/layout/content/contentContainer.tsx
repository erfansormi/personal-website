import React from 'react';
import Image from 'next/image';

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='relative w-full overflow-y-scroll content-height'>
            {/* underside background content */}
            <div
                className={`fixed h-[inherit] z-[-1] dark:bg-dark-700 bg-dark-400 start-0 end-0 lg:end-[var(--layout-p-x)] lg:start-[var(--layout-p-x)]`}
            >
                <div className={`relative z-[-1] dark:after:bg-[rgba(30,30,40,.90)] after:bg-[rgba(238,241,255,.85)] h-[430px] rounded-e-md after:inset-0 after:absolute`}>
                    <Image
                        alt='nature'
                        src={"/top-bg.jpg"}
                        priority
                        fill
                        className='object-cover'
                        quality={40}
                        sizes="(max-width: 1024px) 100vw,
                                70vw"
                    />
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