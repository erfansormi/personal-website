
import { GetStaticProps } from 'next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// components
import Layout from '@/components/layout/layout'
import SidebarContainer from '@/components/pages/home/sidebar/sidebarContainer'
import ContentContainer from '@/components/pages/home/content/contentContainer';

export default function Home() {
  return (
    <Layout>
      <div className='flex'>

        {/* sidebar */}
        <aside className='max-w-[var(--sidebar-width)] w-full shadow-md'>
          <SidebarContainer />
        </aside>

        {/* content */}
        <div className='w-full'>
          <ContentContainer />
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common", 'home', "skills"]))
  }
});