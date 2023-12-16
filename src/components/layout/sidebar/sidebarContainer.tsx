import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

// font
import { vazir } from "@/pages/_app";

// data
import { socialNetworksData } from "./sidebarData";

// components
import ScrollbarContent from "./scrollbarContent";

const SidebarContainer = ({ className }: { className?: string }) => {
  const { t } = useTranslation("home");
  const topBoxRef = React.useRef<HTMLDivElement>(null);
  const bottomFooterRef = React.useRef<HTMLElement>(null);

  return (
    <div
      className={`dark:bg-dark-750 bg-light-300 capitalize sticky overflow-hidden content-height ${className} ${vazir.className}`}
    >
      {/* fixed top box */}
      <div
        ref={topBoxRef}
        className={`absolute z-20 top-0 right-0 left-0 px-6 py-8 shadow-md dark:bg-dark-700.9 bg-light-300.9`}
      >
        <div className="flex flex-col gap-2 items-center">
          {/* picture */}
          <div className="w-24 h-24 relative">
            <Image
              fill
              alt="Erfan Sormi"
              src={"/erfansormi-1.jpg"}
              className="object-cover rounded-full"
              quality={85}
              sizes="(max-width: 400px) 32vw,
                            (max-width: 768px) 22vw,
                            (max-width: 1024px) 14vw,
                            8vw"
            />
          </div>

          {/* name */}
          <div>
            <h3 className="text-lg font-vazir">{t("name")}</h3>
          </div>

          {/* skill */}
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            <span>{t("skill")}</span>
          </div>
        </div>
      </div>

      {/* scrollbar content  */}
      <ScrollbarContent topBoxRef={topBoxRef} bottomFooterRef={bottomFooterRef} />

      {/* social networks in fixed bottom footer */}
      <footer
        className="absolute bottom-0 left-0 right-0 px-4 py-4 shadow-md dark:bg-dark-700.9 bg-light-300.9"
        ref={bottomFooterRef}
      >
        <div className="flex items-center justify-center gap-5">
          {socialNetworksData.map((item, index) => (
            <section key={index * 11} className="text-lg">
              <a
                href={item.address}
                target="_blank"
                className="secondary-text hover-primary-text"
              >
                {<item.icon />}
              </a>
            </section>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default SidebarContainer;
