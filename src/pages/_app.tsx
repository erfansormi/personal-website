import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { appWithTranslation } from "next-i18next";
import { Analytics } from '@vercel/analytics/react';

// font
import { Vazirmatn } from 'next/font/google';
export const vazir = Vazirmatn({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  variable: '--font-vazir',
  subsets: ['latin', "arabic", "latin-ext"],
})

// components
import MantineTheme from '@/theme/mantineProvider'

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta name="language" content={locale === "fa" ? "persian" : "english"} />
        <meta name="author" content='Erfan Sormi' />
        <meta name="publisher" content='Erfan Sormi' />
        <meta name="designer" content='Erfan Sormi' />

        {/* Search Engine Optimization Meta Tags */}
        <title>Erfan Sormi</title>
        <meta name="description" content="Learn more about Erfan Sormi and his skills, projects and resume" />
        <meta name="keywords" content="Frontend Developer,React Developer,Next js Developer,توسعه دهنده فرانت اند,توسعه دهنده ریکت,طراح سایت,توسعه دهنده سایت" />

        {/* Optional Meta Tags */}
        <meta name='city' content="Alborz" />
        <meta name="country" content="Iran" />
        <meta name="subject" content="Personal" />

        {/* Meta Tags for HTML pages on Mobile */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* links */}
        <link rel="shortcut icon" href="/es.png" type="image/x-icon" />
      </Head>

      <MantineTheme>
        <main className={`${vazir.className} ${vazir.variable}`}>
          <Component {...pageProps} />
        </main>

        <Analytics />
      </MantineTheme>
    </>
  )
}

export default appWithTranslation(App);