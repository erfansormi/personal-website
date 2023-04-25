import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// components
import { ActionIcon } from "@mantine/core";

const ChangeLanguage = () => {
    const router = useRouter();

    const handleLocaleChange = async (locale: "fa" | "en") => {
        await router.push(router.route, router.asPath, {
            locale,
        });
        document.dir = locale === "en" ? "ltr" : "rtl";
    };

    return (
        <ActionIcon className='relative w-8'>
            {
                router.locale === "fa" ?
                    <Image
                        alt='iran'
                        src={"/iran.png"}
                        fill
                        className='object-contain'
                        quality={100}
                        onClick={() => handleLocaleChange("en")}
                    />
                    :
                    router.locale === "en" &&
                    <Image
                        alt='british'
                        src={"/british.png"}
                        fill
                        className='object-contain'
                        quality={100}
                        onClick={() => handleLocaleChange("fa")}
                    />
            }
        </ActionIcon>
    )
}

export default ChangeLanguage;