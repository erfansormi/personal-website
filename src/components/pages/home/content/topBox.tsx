import React from 'react'
import { useTranslation } from 'next-i18next';

// css
import styles from "./content.module.css";

const TopBox = () => {
    const { t } = useTranslation("home");

    return (
        <div className='px-3 py-12'>
            <div className='h-[400px] w-full relative'>

                {/* top space */}
                <div className='absolute -top-7 right-10 left-10 dark:bg-dark-700 dark:bg-dark-500 bg-light-600 h-12 rounded-md z-[-1]'></div>

                {/* background image */}
                <div className={`rounded h-full overflow-hidden dark:after:bg-[rgba(45,45,58,.7)] after:bg-[rgba(237,248,254,0.5)] ${styles.topBox}`}>

                    <div className='absolute inset-0 z-20'>
                        {/* box text */}
                        <div className='flex items-center justify-center h-full w-full text-dark-900 dark:text-light-100'>
                            <div className='flex flex-col gap-6 text-center'>
                                <h1 className='text-5xl'>
                                    {t("introduction")}
                                </h1>
                                <h2 className='text-4xl'>
                                    {t("welcome")}
                                </h2>
                                <div className='flex justify-center'>
                                    <p className='w-4/5'>
                                        {t("about")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBox