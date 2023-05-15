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
        },
        {
            label: "وضعیت تحصیلی",
            value: "دانشجو کامپیوتر"
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
        },
        {
            label: "educational status",
            value: "computer student"
        }
    ]
}

export const communicationData = {
    fa: [
        {
            icon: TbMail,
            value: <a href="mailto:erfansormi97@gmail.com" className="hover-primary-text">erfansormi97@gmail.com</a>
        },
        {
            icon: TbPhone,
            value: <a href="tel:09399112453" className="hover-primary-text">2453 911 0939</a>
        },
        {
            icon: MdOutlineLocationOn,
            value: "البرز، کرج"
        }
    ],
    en: [
        {
            icon: TbMail,
            value: <a href="mailto:erfansormi97@gmail.com" className="hover-primary-text">erfansormi97@gmail.com</a>
        },
        {
            icon: TbPhone,
            value: <a href="tel:09399112453" className="hover-primary-text">0939 911 2453</a>
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
        name: "linkedin"
    },
    {
        icon: BsGithub,
        address: "https://github.com/erfansormi",
        name: "github"
    },
    {
        icon: BsTelegram,
        address: "https://t.me/buys_sales",
        name: "telegram"
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
        { value: "mui, mantine" },
    ]
}