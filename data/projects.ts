export type Project = {
  id: string
  title: string
  description: string[]
  images: string[]
  video?: string 
  tags: string[]
  github?: string
  demo?: string
  category: "web" | "other"
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Deep Learning Fraud Detection During Online Assessment",
    description: [
      "Developed RF and RNN models in TensorFlow for analyzing mouse behavior and detecting fraud, achieving 96% accuracy.",
      "Applied Agile and XP methodologies, reducing project delivery time by 15%.",
    ],
    images: [
      "/projects/deeplearning-1.jpg",
      "/projects/deeplearning-2.jpg",
      "/projects/deeplearning-3.jpg",
    ],
    tags: ["Python", "Tensorflow", "Pandas"],
    demo: "https://colab.research.google.com/drive/19r1Oo9-4gGkmjtEmBdciL_taWGqFwEo_?usp=sharing",
    category: "other",
  },
  {
    id: "2",
    title: "Stray Spotter: Cloud-based Web Service",
    description: [
      "Led a team of 3 to create a web service for sharing stray cat pictures and tracking their well-being.",
      "Built the backend with Node.js, designed the MySQL database, and used AWS S3 cloud for image hosting.",
    ],
    images: [
      "/projects/stray-spotter-0.png",
      "/projects/stray-spotter-1.png",
      "/projects/stray-spotter-2.png",
      "/projects/stray-spotter-3.png",
      "/projects/stray-spotter-4.png",
    ],
    tags: ["Node.js", "AWS", "MySQL"],
    github: "https://github.com/NiceKim/strayspotter",
    category: "web",
  },
  {
    id: "3",
    title: "Responsive Portfolio Website",
    description: [
      "Developed a responsive, interactive portfolio website to showcase my achievements.",
      "Built with Next.js for full-stack functionality, Tailwind CSS for the frontend, and deployed on Vercel.",
    ],
    images: [
      "/projects/my-portfolio-1.png",
      "/projects/my-portfolio-2.png",
      "/projects/my-portfolio-3.png",
      "/projects/my-portfolio-4.png",
      "/projects/my-portfolio-5.png",
    ],
    tags: ["Next.Js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/NiceKim/my_portfolio",
    demo: "jowoon-kim-portfolio.vercel.app",
    category: "web",
  },
  {
    id: "4",
    title: "Word Monster: Gamified Language Learning on Android",
    description: [
      "Developed an educational Android game app for language learning with Kotlin and Android Studio.",
      "Implemented unit testing, integrated a leaderboard database, and used APIs for global rankings.",
      "Designed multiple screens using the MVVM model for maintainability."
    ],
    images: ["/projects/word-monster-1.png"],
    tags: ["Kotlin", "Android Studio"],
    category: "other",
  },
  {
    id: "5",
    title: "AI BI: AI-Powered Business Intelligence Web Application",
    description: [
      "Developed a web service using AI to generate business intelligence charts from user data.",
      "As a Frontend Developer, built interactive UI components with React to improve user experience.",
    ],
    images: ["/projects/aibi-1.png", "/projects/aibi-2.png"],
    tags: ["React", "BI"],
    category: "web",
  },
  {
    id: "6",
    title: "EasyGo: Travel App Design with HCI Principles",
    description: [
      "Developed a fully functional travel app prototype in Figma with features for food, accommodations, and attractions.",
      "Applied HCI principles, improving usability by 12% through surveys and user testing."
    ],
    images: [
      "/projects/easygo-1.png",
      "/projects/easygo-2.png",
      "/projects/easygo-3.png",
      "/projects/easygo-4.png",
      ],
    tags: ["Figma", "HCI", "Usablity Testing"],
    demo: "https://www.figma.com/proto/FXDc6NnZCR7VcTK0ge4BK0/Higher-fidility?node-id=6-190&t=ky4mP1o3fdsrSr6k-1",
    video: "https://youtube.com/shorts/Pz_zbfTjIrY?feature=share",
    category: "other",
  },
  {
    id: "7",
    title: "Lyrics Crawling: Python RPA for Subtitle Automation",
    description: [
      "Developed a Python program with Selenium and BeautifulSoup to automate adding subtitles to hymns during live broadcasts",
      "Saved 90% of the time spent on manual searches and transcription."
    ],
    images: ["/projects/rpa-1.jpg"],
    tags: ["Python", "RPA", "BeautifulSoup"],
    category: "other",
  },
  {
    id: "8",
    title: "Jewelry Hunter: Java-based 2D Puzzle Adventure",
    description: [
      "Led a team of 4 in developing a 2D game for Windows.",
      "Utilized Java GUI Swing Library to design the interface and implemented core game logic."
    ],
    images: ["/projects/java-game-1.png", "/projects/java-game-2.png"],
    tags: ["Java", "Swing"],
    github: "https://github.com/sukso96100/jewelry_hunter?tab=readme-ov-file",
    video: "https://www.youtube.com/watch?v=aLrWUD4ksNk",
    category: "other",
  },
]

