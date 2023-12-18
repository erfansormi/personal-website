import React from "react";
import { ActionIcon, Drawer } from "@mantine/core";
import SidebarContainer from "../sidebar/sidebarContainer";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const MobileSidebar = ({ opened, close }: { opened: boolean; close: () => void }) => {
  const { t } = useTranslation("home");

  return (
    <Drawer
      size={360}
      dir="ltr"
      padding={0}
      opened={opened}
      onClose={close}
      withCloseButton={false}
      style={{ position: "relative" }}
      position={t("dir") === "rtl" ? "right" : "left"}
    >
      <div dir={t("dir")}>
        <SidebarContainer className="h-screen" />
        <ActionIcon className="absolute top-1 end-1" onClick={close} variant="subtle">
          <IoClose className="text-2xl" />
        </ActionIcon>
      </div>
    </Drawer>
  );
};

export default MobileSidebar;
