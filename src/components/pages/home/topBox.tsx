import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const TopBox = () => {
  const { t } = useTranslation("home");

  return (
    <div className="px-3 py-12">
      <div className="h-[400px] w-full relative">
        {/* top space */}
        <div className="absolute -top-7 right-10 left-10 dark:bg-dark-700 bg-light-400 h-12 rounded-md z-[-1]"></div>

        {/* background image */}
        <div
          className={`rounded h-full relative overflow-hidden dark:after:bg-[rgba(45,45,58,.7)] after:bg-[rgba(210,218,255,.5)] after:absolute after:inset-0`}
        >
          <Image
            fill
            priority
            quality={40}
            alt="nature"
            src={"/top-bg.jpg"}
            className="object-cover"
            sizes="(max-width: 1024px) 90vw,
                                (max-width: 1500px) 75vw,
                                60vw"
          />

          <div className="absolute inset-0 z-20">
            {/* box text */}
            <div className="flex items-center justify-center h-full w-full text-dark-900 dark:text-light-100">
              <div className="flex flex-col gap-6 text-center">
                <h1 className="md:text-5xl sm:text-4xl text-2xl">{t("introduction")}</h1>
                <h2 className="md:text-4xl sm:text-3xl text-2xl">{t("welcome")}</h2>
                <div className="flex justify-center">
                  <p className="w-4/5 font-normal">{t("about")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBox;
