import { Level, ProjectData } from "@/types/project";

interface Skill {
    title: string,
    level: Level,
    image: string
}

interface SkillData {
    fa: Skill[],
    en: Skill[]
}

export const skillsData: SkillData = {
    fa: [
        {
            title: "bootstrap",
            level: "پیشرفته",
            image: "/bootstrap.png"
        },
        {
            title: "sass",
            level: "متوسط",
            image: "/sass.png"
        },
        {
            title: "tailwind css",
            level: "پیشرفته",
            image: "/tailwind.svg"
        },
        {
            title: "github",
            level: "متوسط",
            image: "/github.png"
        },
        {
            title: "typescript",
            level: "متوسط",
            image: "/typescript.png"
        },
        {
            title: "react js",
            level: "پیشرفته",
            image: "/reactjs.png"
        },
        {
            title: "redux toolkit",
            level: "متوسط",
            image: "/redux.webp"
        },
        {
            title: "next js",
            level: "پیشرفته",
            image: "/nextjs.png"
        },
        {
            title: "mui",
            level: "پیشرفته",
            image: "/mui.png"
        },
        {
            title: "mantine",
            level: "پیشرفته",
            image: "/mantine.png"
        },
        {
            title: "express js",
            level: "ابتدایی",
            image: "/expressjs.png"
        },
        {
            title: "mongo db",
            level: "ابتدایی",
            image: "/mongodb.png"
        }
    ],
    en: [
        {
            title: "bootstrap",
            level: "advanced",
            image: "/bootstrap.png"
        },
        {
            title: "sass",
            level: "intermediate",
            image: "/sass.png"
        },
        {
            title: "tailwind css",
            level: "advanced",
            image: "/tailwind.svg"
        },
        {
            title: "github",
            level: "intermediate",
            image: "/github.png"
        },
        {
            title: "typescript",
            level: "intermediate",
            image: "/typescript.png"
        },
        {
            title: "react js",
            level: "advanced",
            image: "/reactjs.png"
        },
        {
            title: "redux toolkit",
            level: "intermediate",
            image: "/redux.webp"
        },
        {
            title: "next js",
            level: "advanced",
            image: "/nextjs.png"
        },
        {
            title: "mui",
            level: "advanced",
            image: "/mui.png"
        },
        {
            title: "mantine",
            level: "advanced",
            image: "/mantine.png"
        },
        {
            title: "express js",
            level: "beginner",
            image: "/expressjs.png"
        },
        {
            title: "mongo db",
            level: "beginner",
            image: "/mongodb.png"
        }
    ]
}

export const projectData: ProjectData = {
    fa: [
        {
            attributes: [
                "استفاده از next js و خصوصیت ssr",
                "طراحی پنل کاربری",
                "استفاده از نقشه برای ذخیره لوکیشن کاربر",
                "امکان ثبت نام و ورود به همراه اعتبارسنجی",
                "امکان افزودن و حذف محصول از سبد خرید، لایک و ثبت کامنت و ...",
            ],
            technologies: [
                {
                    image: "/tailwind.svg",
                    title: "تیلویند"
                },
                {
                    image: "/mui.png",
                    title: "mui"
                },
                {
                    image: "/typescript.png",
                    title: "تایپ اسکریپت"
                },
                {
                    image: "/nextjs.png",
                    title: "next js"
                },
                {
                    image: "/expressjs.png",
                    title: "express js"
                },
                {
                    image: "/mongodb.png",
                    title: "مونگو دی بی"
                }
            ],
            github: "https://github.com/erfansormi/online-shop",
            website: "https://shop.erfansormi.ir",
            image: "/shop-project.png",
            level: "پیشرفته",
            title: "فروشگاه آنلاین"
        },
        {
            attributes: [
                "استفاده از next js و خصوصیت ssr",
                "دارای حالت تاریک",
                "دارای چارت هر ارز به صورت خطی و شمعی",
                "pagination",
                "امکان جستجوی ارز ها",
            ],
            technologies: [
                {
                    image: "/sass.png",
                    title: "sass"
                },
                {
                    image: "/mui.png",
                    title: "mui"
                },
                {
                    image: "/typescript.png",
                    title: "تایپ اسکریپت"
                },
                {
                    image: "/nextjs.png",
                    title: "next js"
                },
            ],
            github: "https://github.com/erfansormi/crypto-currency",
            website: "https://crypto.erfansormi.ir",
            image: "/crypto-project.png",
            level: "متوسط",
            title: "ارزهای دیجیتال"
        }
    ],
    en: [
        {
            attributes: [
                "using next js and ssr feature",
                "user panel design",
                "using the map to store the user's location",
                "possibility of registration and login with validation",
                "the possibility of adding and removing products from the shopping cart, liking and registering comments and...",
            ],
            technologies: [
                {
                    image: "/tailwind.svg",
                    title: "tailwind css"
                },
                {
                    image: "/mui.png",
                    title: "mui"
                },
                {
                    image: "/typescript.png",
                    title: "typescript"
                },
                {
                    image: "/nextjs.png",
                    title: "next js"
                },
                {
                    image: "/expressjs.png",
                    title: "express js"
                },
                {
                    image: "/mongodb.png",
                    title: "mongo db"
                }
            ],
            github: "https://github.com/erfansormi/online-shop",
            website: "https://shop.erfansormi.ir",
            image: "/shop-project.png",
            level: "advanced",
            title: "online shop"
        },
        {
            attributes: [
                "using next js and ssr feature",
                "having a Dark Mode",
                "has a chart of each currency in a linear and candlestick format",
                "pagination",
                "possibility to search for currencies",
            ],
            technologies: [
                {
                    image: "/sass.png",
                    title: "sass"
                },
                {
                    image: "/mui.png",
                    title: "mui"
                },
                {
                    image: "/typescript.png",
                    title: "typescript"
                },
                {
                    image: "/nextjs.png",
                    title: "next js"
                },
            ],
            github: "https://github.com/erfansormi/crypto-currency",
            website: "https://crypto.erfansormi.ir",
            image: "/crypto-project.png",
            level: "intermediate",
            title: "cryptocurrency"
        }
    ]
}