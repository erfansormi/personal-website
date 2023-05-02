import React from 'react';
import { useTranslation } from 'next-i18next';

// types
import { Project } from '@/types/project';
import Image from 'next/image';
import { Badge, Button } from '@mantine/core';

const ProjectCard = ({ data }: { data: Project }) => {
    const { t } = useTranslation("home");

    return (
        <div className='shadow-md rounded-md dark:bg-dark-700 bg-light-400 px-4 py-6 relative'>

            {/* title */}
            <div className='w-full text-center mb-7'>
                <h5 className='text-xl'>
                    {data.title}
                </h5>
            </div>

            <figure className='flex flex-col xl:flex-row gap-8'>
                {/* image */}
                <div className='w-full xl:w-2/5'>
                    <div className='relative h-52'>
                        <Image
                            fill
                            alt={`${data.title} project`}
                            src={data.image}
                            className='xl:object-cover object-contain rounded'
                        />
                    </div>
                </div>

                {/* project info */}
                <figcaption className='w-full xl:w-3/5 flex flex-col gap-5' >
                    <div className='flex sm:flex-row flex-col gap-x-3 gap-y-6 px-6 sm:px-0 justify-around'>
                        {/* technologies */}
                        <div className='flex flex-col gap-3'>
                            <div>
                                <h6>
                                    {t("projects.technologies")}
                                </h6>
                            </div>
                            <ul className='flex flex-col justify-center gap-1.5 capitalize marker:text-blue-800 dark:marker:text-yellow-600 list-disc'>
                                {
                                    data.technologies.map((item, index) =>
                                        <li
                                            key={data.title + (index * 17)}
                                        >
                                            <figure className='flex items-center gap-1.5 text-sm'>
                                                <Image
                                                    alt={item.title}
                                                    src={item.image}
                                                    width={15}
                                                    height={15}
                                                    className='rounded'
                                                />
                                                <figcaption>
                                                    {item.title}
                                                </figcaption>
                                            </figure>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>

                        {/* attributes */}
                        <div className='flex flex-col gap-3'>
                            <div className='dark:text-gray-300 text-gray-700'>
                                <h6 className='font-normal'>
                                    {t("projects.attributes")}
                                </h6>
                            </div>
                            <div className='text-sm font-thin'>
                                <ul className='secondary-text marker:text-blue-800 dark:marker:text-yellow-600 list-disc flex flex-col gap-1.5 sm:max-w-[310px] capitalize'>
                                    {
                                        data.attributes.map(item =>
                                            <li key={item}>
                                                {item}
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* links */}
                    <div className='flex justify-end gap-2'>
                        <a href={data.website} target='_blank'>
                            <Button>
                                {t("projects.website")}
                            </Button>
                        </a>
                        <a href={data.github} target='_blank'>
                            <Button variant='outline'>
                                {t("projects.github")}
                            </Button>
                        </a>
                    </div>
                </figcaption>
            </figure>

            {/* level */}
            <span className='absolute -top-3 end-0'>
                <Badge variant='outline' radius={"sm"}>
                    {data.level}
                </Badge>
            </span>
        </div>
    )
}

export default ProjectCard;