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
      { name: "javascript", logo: "javascript", color: "F7DF1E" },
      { name: "python", logo: "python", color: "3776AB" },
      { name: "java", logo: "openjdk", color: "ED8B00" },
      { name: "C", logo: "c", color: "00599C" },
      { name: "kotlin", logo: "kotlin", color: "0095D5" },
      { name: "Shell Script", logo: "linux", color: "000000" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    items: [
      { name: "express", logo: "express", color: "000000" },
      { name: "nodejs", logo: "node.js", color: "339933" },
      { name: "rest API", logo: "rest", color: "007ACC" },
      { name: "FastAPI", logo: "fasiapi", color: "005571" },
      { name: "MySQL", logo: "mysql", color: "005C84" },
      { name: "mongodb", logo: "mongodb", color: "47A248" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Code,
    items: [
      { name: "html5", logo: "html5", color: "E34F26" },
      { name: "css3", logo: "css3", color: "1572B6" },
      { name: "react", logo: "react", color: "61DAFB" },
      { name: "next.js", logo: "next.js", color: "000000" },
      { name: "typescript", logo: "typescript", color: "3178C6" },
      { name: "tailwind", logo: "tailwind-css", color: "06B6D4" },
      { name: "Bootstrap", logo: "Bootstrap", color: "563D7C" },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    items: [
      { name: "git", logo: "git", color: "F05032" },
      { name: "github", logo: "github", color: "100000" },
      { name: "swagger", logo: "swagger", color: "23Clojure"},
      { name: "TensorFlow", logo: "tensorflow", color: "FF6F00"},
      { name: "Jest", logo: "jest", color: "323330"},
      { name: "figma", logo: "figma", color: "F24E1E" },
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    items: [
      { name: "aws ec2", logo: "amazonec2", color: "FF9900"},
      { name: "aws rds", logo: "amazonrds", color: "527FFF"},
      { name: "aws lambda", logo: "awslambda", color: "FF9900"},
      { name: "aws s3", logo: "amazons3", color: "569A31"},
      { name: "vercel", logo: "vercel", color: "000000"},
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

