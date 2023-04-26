import React from 'react'
import Image from 'next/image';
import { useTranslation } from "next-i18next";

// types
import { Locales } from '@/types/locales';

// icons
import { BiCheck } from "react-icons/bi";
import { CgSoftwareDownload } from "react-icons/cg";

// data
import { communicationData, personalInfoData, skillsSummaryData, socialNetworksData } from './sidebarData';
import { Divider, ThemeIcon } from '@mantine/core';

const SidebarContainer = () => {
    const { t } = useTranslation("home");
    const topBoxRef = React.useRef<HTMLDivElement>(null);
    const bottomFooterRef = React.useRef<HTMLElement>(null);

    return (
        <div className='dark:bg-dark-750 bg-light-400 capitalize relative h-[90vh] overflow-hidden'>

            {/* fixed top box */}
            <div
                ref={topBoxRef}
                className={`absolute top-0 right-0 left-0 px-6 py-8 shadow-md dark:bg-dark-700.09 bg-light-400.09`}
            >
                <div className='flex flex-col gap-2 items-center'>
                    {/* picture */}
                    <div className='w-24 h-24 relative'>
                        <Image
                            fill
                            alt='Erfan Sormi'
                            src={"/erfansormi-1.jpg"}
                            className='object-cover rounded-full'
                            quality={100}
                        />
                    </div>

                    {/* name */}
                    <div>
                        <h3 className='text-lg'>
                            {t("name")}
                        </h3>
                    </div>

                    {/* skill */}
                    <div className='text-gray-500 dark:text-gray-400 text-sm'>
                        <span>
                            {t("skill")}
                        </span>
                    </div>
                </div>
            </div>

            {/* scrollbar content  */}
            <div className='flex flex-col px-6 py-8 gap-y-6 secondary-text overflow-y-scroll h-full'>

                {/* personal info */}
                <div
                    className='flex flex-col gap-y-2.5'
                    style={{ marginTop: topBoxRef.current ? topBoxRef.current.clientHeight : 200 }}
                >
                    {
                        personalInfoData[t("locale") as Locales].map((item, index) =>
                            <div key={index}>
                                <div className='flex items-center justify-between text-sm'>
                                    <span className='font-medium primary-text'>
                                        {item.label}
                                    </span>
                                    <span>
                                        {item.value}
                                    </span>
                                </div>
                            </div>
                        )
                    }
                </div>

                <Divider />

                {/* communication */}
                <div className='flex flex-col gap-y-2.5 normal-case'>
                    {
                        communicationData[t("locale") as Locales].map((item, index) =>
                            <div key={index * 7}>
                                <div className='flex items-center text-sm gap-x-4'>
                                    <span className='font-medium'>
                                        <ThemeIcon>
                                            {<item.icon className='text-lg' />}
                                        </ThemeIcon>
                                    </span>
                                    <span>
                                        {item.value}
                                    </span>
                                </div>
                            </div>
                        )
                    }
                </div>

                <Divider />

                {/* summary of skills */}
                <div className='flex flex-col gap-y-2'>
                    {
                        skillsSummaryData[t("locale") as Locales].map((item, index) =>
                            <div key={index * 12}>
                                <div className='flex items-center text-sm gap-x-2'>
                                    <span className='font-medium primary-color text-xl mb-1'>
                                        <BiCheck />
                                    </span>
                                    <span>
                                        {item.value}
                                    </span>
                                </div>
                            </div>
                        )
                    }
                </div>

                <Divider />

                {/* download resume */}
                <div
                    style={{ marginBottom: bottomFooterRef.current ? bottomFooterRef.current.clientHeight : 100 }}
                >
                    <a
                        href='#'
                        className='flex items-center gap-x-1 hover-primary-text'
                    >
                        <span>
                            {t("resume")}
                        </span>
                        <span className='flex text-2xl mb-1.5'>
                            <CgSoftwareDownload />
                        </span>
                    </a>
                </div>
            </div>

            {/* social networks */}
            <footer
                className='absolute bottom-0 left-0 right-0 px-4 py-4 shadow-md dark:bg-dark-700.09 bg-light-400.09'
                ref={bottomFooterRef}
            >
                <div className='flex items-center justify-center gap-5'>
                    {
                        socialNetworksData.map((item, index) =>
                            <section key={index * 11} className='text-lg'>
                                <a
                                    href={item.address}
                                    target='_blank'
                                    className='dark:text-dark-100 dark:hover:text-white text-dark-400 hover:text-dark-900 transition-colors duration-300'
                                >
                                    {<item.icon />}
                                </a>
                            </section>
                        )
                    }
                </div>
            </footer>
        </div>
    )
}

export default SidebarContainer;