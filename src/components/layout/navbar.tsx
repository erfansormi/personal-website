import React from 'react';

// components
import ChangeLanguage from './changeLanguage';
import { ActionIcon, useMantineColorScheme } from "@mantine/core";

// icons
import { TbSunHigh, TbMoonStars } from "react-icons/tb";

const Navbar = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <nav className='h-10 px-6 flex items-center justify-end gap-x-2 dark:bg-dark-750 bg-light-200 shadow-md sticky top-0 z-50'>

            {/* change dark or light mode */}
            <div>
                <ActionIcon
                    onClick={() => toggleColorScheme()}
                    size="lg"
                    sx={(theme) => ({
                        color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
                    })}
                >
                    {colorScheme === 'dark' ? <TbSunHigh size="1.2rem" /> : <TbMoonStars size="1.2rem" />}
                </ActionIcon>
            </div>

            {/* change locale */}
            <div>
                <ChangeLanguage />
            </div>
        </nav>
    )
}

export default Navbar;