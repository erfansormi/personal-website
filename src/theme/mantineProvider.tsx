import React, { useState } from 'react'
import { MantineProvider, ColorScheme, ColorSchemeProvider, Tuple, DefaultMantineColor, Global, ButtonStylesParams } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { useRouter } from 'next/router';

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

    // locale
    const router = useRouter();

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme,
                    colors: {
                        dark: ["#9ca3af", "#757575", "#6b7280", "#4b5563", "#374151", "#2b2b35", "#20202a", "#191923", "#14141c", "#0e0e14"],
                        light: ["#f0f2ff", "#e4e8ff", "#d9dffd", "#D2DAFF", "#bdc8fb", "#AAC4FF", "#B1B2FF", "#999af7", "#7f80f7"],
                        yellow: ["#fefce8", "#fef9c3", "#fef08a", "#fde047", "#FFD43B", "#FCC419", "#FAB005", "#F59F00", "#F08C00", "#E67700"],
                    },
                    white: '#F4FBFE',
                    black: '#14141c',
                    primaryColor: colorScheme === "dark" ? "yellow" : "blue",
                    primaryShade: {
                        dark: 7,
                        light: 6
                    },
                    dir: router.locale === "fa" ? "rtl" : "ltr",
                    fontFamily: "inherit",
                    defaultRadius: "sm",
                    components: {
                        Button: {
                            // Subscribe to theme and component params
                            styles: (theme, params: ButtonStylesParams, { variant }) => ({
                                root: {
                                    backgroundColor:
                                        variant === 'filled'
                                            ? `${theme.colors[params.color || theme.primaryColor][theme.colorScheme === "light" ? 6 : 7]} !important`
                                            : undefined,
                                    transition: "0.3s all ease-in",
                                    ":hover": {
                                        backgroundColor:
                                            variant === 'filled'
                                                ? `${theme.colors[params.color || theme.primaryColor][theme.colorScheme === "light" ? 8 : 9]} !important`
                                                : undefined
                                    }
                                },
                            }),
                        },
                        TextInput: {
                            styles: () => ({
                                root: {
                                    ".mantine-Input-icon": {
                                        insetInlineStart: 0,
                                    },
                                    ".mantine-Input-input": {
                                        textAlign: "start",
                                        paddingInlineStart: "2.25rem"
                                    }
                                },
                            }),
                        },
                        Textarea: {
                            styles: () => ({
                                root: {
                                    ".mantine-Textarea-icon": {
                                        alignItems: "start",
                                        paddingTop: 11,
                                        insetInlineStart: 0,
                                    },
                                    ".mantine-Input-input": {
                                        textAlign: "start",
                                        paddingInlineStart: "2.25rem"
                                    }
                                },
                            }),
                        }
                    }
                }}
            >
                <Global
                    styles={(theme) => ({
                        ".mantine-Divider-root": {
                            borderColor: theme.colorScheme === "dark" ? theme.colors.dark[3] : "#d1d5db"
                        },
                    })}
                />
                {children}
                <Notifications position='bottom-center' className='shadow-sm' />
            </MantineProvider>
        </ColorSchemeProvider >
    )
}

export default MantineTheme;