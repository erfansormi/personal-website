import React from 'react';
import Image from 'next/image';

// mantine
import { Badge } from '@mantine/core';

interface Props {
    title: string,
    image: string,
    level: string
}

const SkillCard = ({ image, level, title }: Props) => {
    return (
        <div className='relative shadow-md bg-light-500 dark:bg-dark-700 p-4 rounded-md h-32 flex items-center'>
            <div className='flex items-center justify-between w-full'>

                {/* image */}
                <div className='relative w-14 h-14'>
                    <Image
                        fill
                        alt={title}
                        src={image}
                        className='object-contain rounded-md'
                    />
                </div>

                {/* title */}
                <div>
                    <h4 className='text-base text-[0.9rem]'>
                        {title}
                    </h4>
                </div>

                {/* level */}
                <span className="absolute -end-1 -top-3">
                    <Badge variant='filled' className='text-[0.55rem]' radius="sm">
                        {level}
                    </Badge>
                </span>
            </div>
        </div>
    )
}

export default SkillCard;