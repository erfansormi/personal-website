import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";

const HeadTags = () => {
  const { t } = useTranslation("home");

  // json ld schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    headline: t("name"),
    name: t("name"),
    description: t("description"),
    email: "erfansormi97@gmail.com",
    jobTitle: "Frontend Developer",
    nationality: "Iranian",
    url: "https://erfansormi.ir",
    image:
      "https://www.erfansormi.ir/_next/image?url=%2Ferfansormi-1.jpg&w=128&q=85",
    gender: "Male",
    author: [
      {
        "@type": "Person",
        name: t("name"),
      },
    ],
    datePublished: "2023-05-01T09:00:00.000Z",
  };

  return (
    <Head>
      {/* Recommended Meta Tags */}
      <meta name="language" content={t("locale") as string} />
      <meta name="author" content={t("name") as string} />
      <meta name="publisher" content={t("name") as string} />
      <meta name="designer" content={t("name") as string} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{t("name")}</title>
      <meta name="description" content={t("description") as string} />
      <meta
        name="keywords"
        content="Frontend Developer,React Developer,Next js Developer,توسعه دهنده فرانت اند,توسعه دهنده ریکت,طراح سایت,توسعه دهنده سایت"
      />

      {/* Optional Meta Tags */}
      <meta name="city" content="Alborz" />
      <meta name="country" content="Iran" />
      <meta name="subject" content="Personal" />

      {/* Meta Tags for HTML pages on Mobile */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* og meta tags */}
      <meta name="og:locale" content={t("locale") as string} />
      <meta name="og:site_name" content="erfan sormi personal website" />
      <meta name="og:title" content={t("name") as string} />

      {/* links */}
      <link rel="shortcut icon" href="/es.png" type="image/x-icon" />
      <link rel="canonical" href="https://erfansormi.ir" />

      {/* json ld schemas */}
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default HeadTags;
