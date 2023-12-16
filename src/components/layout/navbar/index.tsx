import React from "react";

// icons
import { IoClose } from "react-icons/io5";
import { GoKebabVertical } from "react-icons/go";

// components
import { Drawer } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import ChangeLanguage from "./changeLanguage";
import ChangeThemeMode from "./changeThemeMode";
import SidebarContainer from "../sidebar/sidebarContainer";

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

        {/* sidebar */}
        {/* (if size >= lg) display:none */}
        <div className="lg:hidden" onClick={open}>
          <ActionIcon aria-label="sidebar opener">
            <GoKebabVertical />
          </ActionIcon>
        </div>

        <Drawer
          opened={opened}
          onClose={close}
          withCloseButton={false}
          size={360}
          padding={0}
          style={{ position: "relative" }}
        >
          <SidebarContainer className="h-screen" />
          <ActionIcon className="absolute top-1 end-1" onClick={close}>
            <IoClose className="text-2xl" />
          </ActionIcon>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
