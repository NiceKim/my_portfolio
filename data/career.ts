export type CareerItem = {
  id: string
  title: string
  company: string
  range: string
  description: string
  logo: string // Added logo field
}

export const career: CareerItem[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    range: "2020 - Present",
    description:
      "Led development of multiple high-impact web applications, mentored junior developers, and implemented best practices for code quality and performance.",
    logo: "/images/career/company1.jpg", // Add your company logo path here
  },
  {
    id: "2",
    title: "Software Engineer",
    company: "Tech Startup",
    range: "2018 - 2020",
    description:
      "Developed and maintained web applications using React and Node.js, collaborated with cross-functional teams to deliver projects on time.",
    logo: "/images/career/company2.jpg", // Add your company logo path here
  },
]

