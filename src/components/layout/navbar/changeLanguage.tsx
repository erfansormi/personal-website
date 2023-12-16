import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"

// components
import { ActionIcon } from "@mantine/core"

const ChangeLanguage = () => {
  const router = useRouter()

  const handleLocaleChange = async (locale: "fa" | "en") => {
    await router.push(router.route, router.asPath, {
      locale,
    })
    document.dir = locale === "en" ? "ltr" : "rtl"
  }

  return (
    <ActionIcon className="relative w-8" variant="transparent">
      {router.locale === "en" ? (
        <Image
          fill
          alt="iran"
          quality={90}
          src={"/iran.png"}
          className="object-contain"
          onClick={() => handleLocaleChange("fa")}
          sizes="(max-width: 600px) 15vw,(max-width: 1200px) 10vw,5vw"
        />
      ) : (
        router.locale === "fa" && (
          <Image
            fill
            alt="british"
            quality={90}
            src={"/british.png"}
            className="object-contain"
            onClick={() => handleLocaleChange("en")}
            sizes="(max-width: 600px) 15vw,(max-width: 1200px) 10vw,5vw"
          />
        )
      )}
    </ActionIcon>
  )
}

export default ChangeLanguage
