import React from 'react';
import { useTranslation } from 'next-i18next';

// data
import { projectData } from '@/components/pages/home/contentData';

// types
import { Locales } from '@/types/locales';

// components
import ProjectCard from '@/components/data_display/projectCard';
import SectionTitle from '@/components/data_display/sectionTitle';

const Projects = () => {
    const { t } = useTranslation("home");

    return (
        <div>
            <SectionTitle title={t("projects.title")} />

            <div className='flex flex-col gap-6'>
            {
                projectData[t("locale") as Locales].map((item, index) =>
                    <ProjectCard data={item} key={item.title + item.website} />
                )
            }
            </div>
        </div>
    )
}

export default Projects;