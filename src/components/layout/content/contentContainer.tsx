import React from 'react';
import { useRouter } from 'next/router';

// css
import styles from "./content.module.css";

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const current = containerRef.current;

    const router = useRouter();

    return (
        <div ref={containerRef} className='relative w-full overflow-y-scroll content-height'>
            {/* underside background content */}
            <div
                className={`fixed h-[inherit] ${styles.underside_bg_container} dark:bg-dark-700 bg-dark-400`}
                style={{ insetInlineEnd: current ? router.locale === "fa" ? current.offsetLeft - 300 : current.offsetLeft : 0 }}
            >
                <div className={`dark:after:bg-[rgba(30,30,40,.90)] after:bg-[rgba(238,241,255,.85)] h-[430px] ${styles.underside_bg} rounded-e-md`}>
                </div>
            </div>

            {/* sections */}
            <div className='flex-col flex gap-y-10 px-8'>
                {children}
            </div>
        </div>
    )
}

export default ContentContainer;