export type Skill = {
  title: string
  items: {
    name: string
    logo?: string
    color?: string
  }[]
}

export const skills: Skill[] = [
  {
    title: "Frontend Development",
    items: [
      { name: "react", logo: "react", color: "61DAFB" },
      { name: "nextjs", logo: "next.js", color: "000000" },
      { name: "typescript", logo: "typescript", color: "3178C6" },
      { name: "tailwindcss", logo: "tailwind-css", color: "06B6D4" },
      { name: "redux", logo: "redux", color: "764ABC" },
    ],
  },
  {
    title: "Backend Development",
    items: [
      { name: "express", logo: "express", color: "000000" },
      { name: "nodejs", logo: "node.js", color: "339933" },
      { name: "postgresql", logo: "postgresql", color: "4169E1" },
      { name: "mongodb", logo: "mongodb", color: "47A248" },
      { name: "graphql", logo: "graphql", color: "E10098" },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      { name: "javascript", logo: "javascript", color: "F7DF1E" },
      { name: "python", logo: "python", color: "3776AB" },
      { name: "java", logo: "java", color: "007396" },
      { name: "c++", logo: "c%2B%2B", color: "00599C" },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      { name: "git", logo: "git", color: "F05032" },
      { name: "docker", logo: "docker", color: "2496ED" },
      { name: "aws", logo: "amazon-aws", color: "232F3E" },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "Korean", color: "5A45FF" },
      { name: "English", color: "2B579A" },
      { name: "Vietnamese", color: "FF0000" },
    ],
  },
]

