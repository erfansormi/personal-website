import React from 'react'
import { useTranslation } from "next-i18next";

// types
import { Locales } from '@/types/locales';

// icons
import { BiCheck } from "react-icons/bi";
import { CgSoftwareDownload } from "react-icons/cg";

// data
import { communicationData, personalInfoData, skillsSummaryData } from './sidebarData';
import { Divider, ThemeIcon } from '@mantine/core';

interface Props {
    topBoxRef: React.RefObject<HTMLDivElement>,
    bottomFooterRef: React.RefObject<HTMLElement>
}

const ScrollbarContent = ({ bottomFooterRef, topBoxRef }: Props) => {
    const { t } = useTranslation("home");

    return (
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
                    <span className='text-sm uppercase font-medium'>
                        {t("resume")}
                    </span>
                    <span className='flex text-xl mb-1.5'>
                        <CgSoftwareDownload />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default ScrollbarContent;