import React from 'react'
import { useTranslation } from 'next-i18next';

// data
import { skillsData } from './contentData';

// ts
import { Locales } from '@/types/locales';

// components
import SectionTitle from '@/components/data_display/sectionTitle';
import SkillCard from '@/components/data_display/skillCard';

const Skills = () => {
    const { t } = useTranslation("home");

    return (
        <div>
            <SectionTitle title={t("skills.title")} />
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                {
                    skillsData[t("locale") as Locales].map((item, index) =>
                        <section key={index * 17}>
                            <SkillCard image={item.image} level={item.level} title={item.title} />
                        </section>
                    )
                }
            </div>
        </div>
    )
}

export default Skills;