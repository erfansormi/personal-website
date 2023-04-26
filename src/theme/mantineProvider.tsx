import React, { useState } from 'react'
import { MantineProvider, ColorScheme, ColorSchemeProvider, Tuple, DefaultMantineColor, Global } from '@mantine/core';

// ts
interface Props {
    children: React.ReactNode
}

// add custom colors types
type ExtendedCustomColors = 'light' | DefaultMantineColor;

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
    }
}



const MantineTheme = ({ children }: Props) => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
    const toggleColorScheme = (value?: ColorScheme) => {
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
        document.querySelector("html")?.classList.toggle("dark");
    }

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme,
                    colors: {
                        dark: ["#9ca3af", "#757575", "#6b7280", "#4b5563", "#374151", "#2b2b35", "#20202a", "#191923", "#14141c", "#0e0e14"],
                        light: ["#FBFEFF", "#F8FCFF", "#F4FBFE", "#F1F9FE", "#EDF8FE", "#E9F7FE", "#E6F5FE", "#E2F4FD", "#e3fafd", "#ddf4f7"],
                        yellow: ["#fefce8", "#fef9c3", "#fef08a", "#fde047", "#FFD43B", "#FCC419", "#FAB005", "#F59F00", "#F08C00", "#E67700"],
                    },
                    white: '#F4FBFE',
                    black: '#14141c',
                    dir: "rtl",
                    primaryColor: colorScheme === "dark" ? "yellow" : "blue",
                    primaryShade: {
                        dark: 6,
                        light: 6
                    }
                }}
            >
                <Global
                    styles={(theme) => ({
                        ".mantine-Divider-root": {
                            borderColor: theme.colorScheme === "dark" ? theme.colors.dark[3] : "#d1d5db"
                        }
                    })}
                />
                {children}
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default MantineTheme;