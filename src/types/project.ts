interface Technologies {
    title: string,
    image: string
}

export type Level = "advanced" | "intermediate" | "beginner" | "ابتدایی" | "متوسط" | "پیشرفته"

export interface Project {
    technologies: Technologies[],
    attributes: string[],
    level: Level,
    image: string,
    website: string,
    github: string,
    title: string
}

export interface ProjectData {
    fa: Project[],
    en: Project[]
}