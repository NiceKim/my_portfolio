export type Project = {
  id: string
  title: string
  description: string
  images: string[] // Changed from single image to array
  video?: string // Optional video URL
  tags: string[]
  github: string
  demo: string
  category: "web" | "mobile" | "other"
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js and Stripe integration.",
    images: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg",
      "/images/projects/ecommerce-3.jpg",
    ],
    video: "https://www.youtube.com/watch?v=example1",
    tags: ["Next.js", "TypeScript", "Stripe"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1.demo",
    category: "web",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    images: ["/images/projects/task-1.jpg", "/images/projects/task-2.jpg"],
    video: "https://www.youtube.com/watch?v=example2",
    tags: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/yourusername/project2",
    demo: "https://project2.demo",
    category: "web",
  },
  {
    id: "3",
    title: "Mobile Fitness App",
    description: "A cross-platform fitness tracking application.",
    images: ["/images/projects/fitness-app-1.jpg", "/images/projects/fitness-app-2.jpg"],
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/yourusername/project3",
    demo: "https://project3.demo",
    category: "mobile",
  },
]

