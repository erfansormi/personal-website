import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// components
import { ActionIcon } from "@mantine/core";

const ChangeLanguage = () => {
  const router = useRouter();

  const handleLocaleChange = async (locale: "fa" | "en") => {
    await router.push(router.route, router.asPath, {
      locale,
    });
    document.dir = locale === "en" ? "ltr" : "rtl";
  };

  return (
    <ActionIcon
      className="relative w-8"
      variant="transparent"
      classNames={{ root: "items-center" }}
    >
      {router.locale === "en" ? (
        <Image
          priority
          width={30}
          height={26}
          alt="iran"
          quality={90}
          src={"/iran.png"}
          className="object-contain"
          onClick={() => handleLocaleChange("fa")}
        />
      ) : (
        router.locale === "fa" && (
          <Image
            priority
            width={30}
            height={26}
            alt="british"
            quality={90}
            src={"/british.png"}
            className="object-contain"
            onClick={() => handleLocaleChange("en")}
          />
        )
      )}
    </ActionIcon>
  );
};

export default ChangeLanguage;
