import React from 'react';

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <h3 className='mb-5 text-xl'>
            {title}
        </h3>
    )
}

export default SectionTitle;