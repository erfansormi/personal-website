import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from "next-i18next";

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
  return (
    <MantineTheme>
      <main className={`${vazir.className} ${vazir.variable}`}>
        <Component {...pageProps} />
      </main>
    </MantineTheme>
  )
}

export default appWithTranslation(App);