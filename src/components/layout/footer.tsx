import React from 'react';
import { useTranslation } from 'next-i18next';
import { socialNetworksData } from './sidebar/sidebarData';

const Footer = () => {
    const { t } = useTranslation("home");

    return (
        <footer className='dark:bg-dark-700 bg-light-300 px-6 py-4 rounded'>
            <div className='flex justify-between items-center flex-wrap gap-3 secondary-text'>
                <div>
                    <p className='mt-1'>
                        {t('footer')}
                    </p>
                </div>

                {/* links */}
                <div className='flex items-center justify-center gap-5'>
                    {
                        socialNetworksData.map((item, index) =>
                            <section key={index * 11} className='text-lg'>
                                <a
                                    href={item.address}
                                    target='_blank'
                                    className='secondary-text hover-primary-text'
                                >
                                    {<item.icon />}
                                </a>
                            </section>
                        )
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer;