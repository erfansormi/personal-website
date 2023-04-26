// icons
import { TbMail, TbPhone } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsLinkedin, BsGithub, BsTelegram } from "react-icons/bs";

export const personalInfoData = {
    fa: [
        {
            label: "سن",
            value: "22"
        },
        {
            label: "وضعیت تاهل",
            value: "مجرد"
        },
        {
            label: "وضعیت سربازی",
            value: "معافیت تحصیلی"
        }
    ],
    en: [
        {
            label: "age",
            value: "22"
        },
        {
            label: "marital status",
            value: "single"
        },
        {
            label: "military service",
            value: "education pardon"
        }
    ]
}

export const communicationData = {
    fa: [
        {
            icon: TbMail,
            value: "erfansormi97@gmail.com"
        },
        {
            icon: TbPhone,
            value: "2453 911 0939"
        },
        {
            icon: MdOutlineLocationOn,
            value: "البرز، کرج"
        }
    ],
    en: [
        {
            icon: TbMail,
            value: "erfansormi97@gmail.com"
        },
        {
            icon: TbPhone,
            value: "0939 911 2453"
        },
        {
            icon: MdOutlineLocationOn,
            value: "Alborz, Karaj"
        }
    ]
}

export const socialNetworksData = [
    {
        icon: BsLinkedin,
        address: "https://www.linkedin.com/in/erfan-sormi/",
    },
    {
        icon: BsGithub,
        address: "https://github.com/erfansormi",
    },
    {
        icon: BsTelegram,
        address: "https://t.me/buys_sales",
    }
]

export const skillsSummaryData = {
    fa: [
        { value: "sass، بوت استرپ، تیلویند" },
        { value: "گیت، گیت هاب" },
        { value: "جاوا اسکریپت، تایپ اسکریپت" },
        { value: "ریکت جی اس، نکست جی اس" },
        { value: "mui، mantine" },
    ],
    en: [
        { value: "sass, bootstrap, tailwind" },
        { value: "git, github" },
        { value: "javascript, typescript" },
        { value: "react js, next js" },
        { value: "mui، mantine" },
    ]
}