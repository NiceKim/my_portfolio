import { Code, Server, Monitor, Wrench, Cloud, Globe } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type Skill = {
  title: string
  icon: LucideIcon
  items: {
    name: string
    logo?: string
    color?: string
  }[]
}

export const skills: Skill[] = [
  {
    title: "Programming Languages",
    icon: Monitor,
    items: [
      { name: "Javascript", logo: "javascript", color: "F7DF1E" },
      { name: "Python", logo: "python", color: "3776AB" },
      { name: "Java", logo: "openjdk", color: "ED8B00" },
      { name: "C", logo: "c", color: "00599C" },
      { name: "Kotlin", logo: "kotlin", color: "0095D5" }
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    items: [
      { name: "Express.js", logo: "express", color: "000000" },
      { name: "Node.js", logo: "node.js", color: "339933" },
      { name: "Rest API", logo: "rest", color: "007ACC" },
      { name: "FastAPI", logo: "fasiapi", color: "005571" },
      { name: "MySQL", logo: "mysql", color: "005C84" },
      { name: "MongoDB", logo: "mongodb", color: "47A248" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Code,
    items: [
      { name: "HTML5", logo: "html5", color: "E34F26" },
      { name: "CSS3", logo: "css3", color: "1572B6" },
      { name: "React", logo: "react", color: "61DAFB" },
      { name: "Next.js", logo: "next.js", color: "000000" },
      { name: "Typescript", logo: "typescript", color: "3178C6" },
      { name: "Tailwind CSS", logo: "tailwind-css", color: "06B6D4" },
      { name: "Bootstrap", logo: "Bootstrap", color: "563D7C" },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    items: [
      { name: "Git", logo: "git", color: "F05032" },
      { name: "GitHub", logo: "github", color: "100000" },
      { name: "Swagger", logo: "swagger", color: "23Clojure"},
      { name: "TensorFlow", logo: "tensorflow", color: "FF6F00"},
      { name: "Jest", logo: "jest", color: "323330"},
      { name: "Pytest", logo: "pytest", color: "0A9EDC"},
      { name: "Figma", logo: "figma", color: "F24E1E" },
      { name: "Bash", logo: "GNU%20Bash", color: "4EAA25" }
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    items: [
      { name: "AWS EC2", logo: "amazonec2", color: "FF9900"},
      { name: "AWS RDS", logo: "amazonrds", color: "527FFF"},
      { name: "AWS Lambda", logo: "awslambda", color: "FF9900"},
      { name: "AWS S3", logo: "amazons3", color: "569A31"},
      { name: "Vercel", logo: "vercel", color: "000000"},
      { name: "Docker", logo: "docker", color: "2496ED"},
    ],
  },
  {
    title: "Languages",
    icon: Globe,
    items: [
      { name: "Korean", color: "5A45FF" },
      { name: "English", color: "2B579A" },
      { name: "Vietnamese", color: "FF0000" },
    ],
  },
]

