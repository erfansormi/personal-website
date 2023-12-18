import React from "react";
import dynamic from "next/dynamic";

// icons
import { GoKebabVertical } from "react-icons/go";

// components
import { ActionIcon } from "@mantine/core";
import ChangeLanguage from "./changeLanguage";
import ChangeThemeMode from "./changeThemeMode";
const MobileSidebar = dynamic(() => import("./MobileSidebar"));

// mantine hooks
import { useDisclosure } from "@mantine/hooks";

const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <nav className="h-[var(--navbar-height)] w-full px-6 dark:bg-dark-750 bg-light-300 shadow-md sticky top-0 z-50">
      <div className="flex flex-row-reverse items-center justify-between h-full">
        <div className="flex items-center gap-x-2">
          {/* change dark or light mode */}
          <ChangeThemeMode />

          {/* change locale */}
          <div className="flex">
            <ChangeLanguage />
          </div>
        </div>

        {/* show mobile sidebar icon */}
        {/* (if size >= lg) display:none */}
        <div className="lg:hidden" onClick={open}>
          <ActionIcon aria-label="sidebar opener" variant="subtle">
            <GoKebabVertical />
          </ActionIcon>
        </div>

        {/* mobile sidebar */}
        <MobileSidebar opened={opened} close={close} />
      </div>
    </nav>
  );
};

export default Navbar;
