
import { GetStaticProps } from 'next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// components
import Layout from '@/components/layout/layout'
import SidebarContainer from '@/components/pages/home/sidebar/sidebarContainer'

export default function Home() {
  return (
    <Layout>
      <div className='flex'>

        {/* sidebar */}
        <aside className='max-w-[280px] w-full'>
          <SidebarContainer />
        </aside>

        {/* content */}
        <div className='w-full dark:bg-dark-700 bg-light-200'>

        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common", 'home']))
  }
});