import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { Analytics } from "@vercel/analytics/react";

// font
import { Vazirmatn } from "next/font/google";
export const vazir = Vazirmatn({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  variable: "--font-vazir",
  subsets: ["latin", "arabic", "latin-ext"],
  fallback: ["Vazirmatn", "vazir", "system-ui", "arial"],
});

// components
import HeadTags from "./head";
import MantineTheme from "@/theme/mantineProvider";
import ContextProvider from "@/provider/ContextProvider";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ContextProvider>
      <HeadTags />
      <MantineTheme>
        <main className={`${vazir.className} ${vazir.variable}`}>
          <Component {...pageProps} />
        </main>
        <Analytics />
      </MantineTheme>
    </ContextProvider>
  );
};

export default appWithTranslation(App);
