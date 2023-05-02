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
                router.locale === "en" ?
                    <Image
                        alt='iran'
                        src={"/iran.png"}
                        fill
                        className='object-contain'
                        quality={90}
                        sizes="(max-width: 600px) 15vw,
                                (max-width: 1200px) 10vw,
                                5vw"
                        onClick={() => handleLocaleChange("fa")}
                    />
                    :
                    router.locale === "fa" &&
                    <Image
                        alt='british'
                        src={"/british.png"}
                        fill
                        className='object-contain'
                        quality={90}
                        sizes="(max-width: 600px) 15vw,
                                (max-width: 1200px) 10vw,
                                5vw"
                        onClick={() => handleLocaleChange("en")}
                    />
            }
        </ActionIcon>
    )
}

export default ChangeLanguage;