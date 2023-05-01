import React from 'react';

// icons
import { TbSunHigh, TbMoonStars } from "react-icons/tb";
import { GoKebabVertical } from "react-icons/go";
import { IoClose } from "react-icons/io5";

// components
import ChangeLanguage from './changeLanguage';
import SidebarContainer from './sidebar/sidebarContainer';
import { Drawer } from '@mantine/core';
import { ActionIcon } from '@mantine/core';

// mantine hooks
import { useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';

const Navbar = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <nav className='h-[var(--navbar-height)] w-full px-6 dark:bg-dark-750 bg-light-300 shadow-md sticky top-0 z-50'>
            <div className='flex flex-row-reverse items-center justify-between h-full'>
                <div className='flex items-center gap-x-2'>
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
                </div>

                {/* sidebar */}
                {/* (if size >= lg) display:none */}
                <div className='lg:hidden' onClick={open}>
                    <ActionIcon>
                        <GoKebabVertical />
                    </ActionIcon>
                </div>

                <Drawer
                    opened={opened}
                    onClose={close}
                    withCloseButton={false}
                    size={360}
                    padding={0}
                    sx={{ position: "relative" }}
                >
                    <SidebarContainer className='h-screen' />
                    <ActionIcon
                        className='absolute top-1 end-1'
                        onClick={close}
                    >
                        <IoClose className='text-2xl' />
                    </ActionIcon>
                </Drawer>
            </div>
        </nav>
    )
}

export default Navbar;