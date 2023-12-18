import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// components
import Layout from "@/components/layout/layout";
import TopBox from "@/components/pages/home/topBox";
import Skills from "@/components/pages/home/skills";
import Projects from "@/components/pages/home/projects";
import Contact from "@/components/pages/home/contact";

export default function Home() {
  return (
    <Layout>
      <TopBox />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["common", "home"])),
  },
});
