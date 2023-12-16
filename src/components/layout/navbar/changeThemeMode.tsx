import React from "react";
import { useGlobalState } from "@/provider/ContextProvider";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { TbMoonStars, TbSunHigh } from "react-icons/tb";

const ChangeThemeMode = () => {
  const { setGlobalState } = useGlobalState();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const handleThemeColor = async () => {
    toggleColorScheme();
    document.querySelector("html")?.classList.toggle("dark");
    if (colorScheme === "dark") {
      setGlobalState({ themeMode: "light" });
    } else {
      setGlobalState({ themeMode: "dark" });
    }
  };

  return (
    <div>
      <ActionIcon
        onClick={handleThemeColor}
        size="lg"
        variant="transparent"
        style={(theme) => ({
          color: colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
        aria-label={`${colorScheme} mode`}
      >
        {colorScheme === "dark" ? <TbSunHigh size="1.2rem" /> : <TbMoonStars size="1.2rem" />}
      </ActionIcon>
    </div>
  );
};

export default ChangeThemeMode;
