import { ReactNode } from "react";
import { Notifications } from "@mantine/notifications";
import {
  Button,
  Divider,
  createTheme,
  MantineProvider,
  DefaultMantineColor,
  MantineColorsTuple,
  localStorageColorSchemeManager,
} from "@mantine/core";
import { useGlobalState } from "@/provider/ContextProvider";

// css modules
import dividerStyles from "./divider.module.css";

// ts
type Props = { children: ReactNode };

// add custom colors types
type ExtendedCustomColors = "light" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}

const theme = (themeMode: "dark" | "light" | "auto") =>
  createTheme({
    colors: {
      dark: [
        "#9ca3af",
        "#757575",
        "#6b7280",
        "#4b5563",
        "#374151",
        "#2b2b35",
        "#20202a",
        "#191923",
        "#14141c",
        "#0e0e14",
      ],
      light: [
        "#f0f2ff",
        "#e4e8ff",
        "#d9dffd",
        "#D2DAFF",
        "#bdc8fb",
        "#AAC4FF",
        "#B1B2FF",
        "#999af7",
        "#7f80f7",
        "#7f80f7",
      ],
      yellow: [
        "#fefce8",
        "#fef9c3",
        "#fef08a",
        "#fde047",
        "#FFD43B",
        "#FCC419",
        "#FAB005",
        "#F59F00",
        "#F08C00",
        "#E67700",
      ],
    },
    white: "#F4FBFE",
    black: "#14141c",
    primaryColor: themeMode === "dark" ? "yellow" : "blue",
    primaryShade: {
      dark: 7,
      light: 6,
    },
    fontFamily: "inherit",
    defaultRadius: "sm",
    components: {
      Button: Button.extend({
        styles: (theme, props) => ({
          root: {
            backgroundColor:
              props.variant === "filled"
                ? `${
                    theme.colors[props.color || theme.primaryColor][
                      themeMode === "light" ? 6 : 7
                    ]
                  } !important`
                : undefined,
            transition: "0.3s all ease-in",
            ":hover": {
              backgroundColor:
                props.variant === "filled"
                  ? `${
                      theme.colors[props.color || theme.primaryColor][
                        themeMode === "light" ? 8 : 9
                      ]
                    } !important`
                  : undefined,
            },
          },
        }),
      }),
      Divider: Divider.extend({ classNames: dividerStyles }),
    },
  });

const MantineTheme = ({ children }: Props) => {
  const { globalState } = useGlobalState();

  const colorSchemeManager = localStorageColorSchemeManager({
    key: "theme-mode",
  });

  return (
    <MantineProvider
      colorSchemeManager={colorSchemeManager}
      defaultColorScheme="dark"
      theme={theme(globalState.themeMode)}
    >
      {children}
      <Notifications position="bottom-center" className="shadow-sm" />
    </MantineProvider>
  );
};

export default MantineTheme;
