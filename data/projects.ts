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
      "LSTM-based non intrusive real-time fraud detection system that analyzes mouse behavior patterns to identify fraud.",
      "96% accuracy with 0.09 second response time.",
      "Agile development process with TDD, resulting in 15% reduction in project delivery time.",
    ],
    images: [
      "/projects/deeplearning-1.jpg",
      "/projects/deeplearning-2.png",
      "/projects/deeplearning-3.jpg",
      "/projects/deeplearning-4.gif",
    ],
    tags: ["Python", "Tensorflow", "Agile", "Pytest"],
    github:"https://github.com/NiceKim/DL_FraudDetection",
    demo: "https://colab.research.google.com/drive/1Z-bj288oLvlznIMzcokDo-8zgHqxBQHu?usp=sharing",
    category: "other",
  },
  {
    id: "2",
    title: "Stray Spotter: Cloud-based Web Service",
    description: [
      "Cloud-based web platform for stray cat monitoring that enables photo sharing and automatic metadata extraction to track population and welfare status.",
      "Containerized full-stack architecture with backend managing database and AWS S3 cloud integration, and frontend server delivering responsive user interface.",
    ],
    images: [
      "/projects/stray-spotter-0.png",
      "/projects/stray-spotter-1.png",
      "/projects/stray-spotter-2.png",
      "/projects/stray-spotter-3.png",
      "/projects/stray-spotter-4.png",
    ],
    tags: ["Node.js", "AWS S3", "MySQL", "Express.js", "Docker", "Next.js", "Jest", "Swagger", "Javascript", "Rest API"],
    github: "https://github.com/NiceKim/strayspotter",
    category: "web",
  },
  {
    id: "3",
    title: "Responsive Portfolio Website",
    description: [
      "Responsive, interactive portfolio website that showcases my achievements.",
      "Modern web application leveraging cutting-edge technologies for full-stack development, responsive styling, and cloud deployment to ensure optimal performance and accessibility.",
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
      "Educational Android game combining language learning with gamification elements to enhance user engagement.",
      "Mobile application featuring competitive leaderboard system, global ranking integration, and MVVM architecture for scalable maintenance.",
    ],
    images: ["/projects/word-monster-1.png"],
    tags: ["Kotlin", "Android Studio"],
    category: "other",
  },
  {
    id: "5",
    title: "AI BI: AI-Powered Business Intelligence Web Application",
    description: [
      "AI-driven platform automatically generating business intelligence charts from raw user data.",
      "Interactive React-based frontend delivering intuitive data visualization and exploration experience."
    ],
    images: ["/projects/aibi-1.png", "/projects/aibi-2.png"],
    tags: ["React", "BI"],
    category: "web",
  },
  {
    id: "6",
    title: "EasyGo: Travel App Design with HCI Principles",
    description: [
      "Travel app prototype integrating food, accommodation, and attraction features in unified experience.",
      "HCI-focused design achieving 12% usability improvement through user testing and optimization.",
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
      "Python automation system for subtitle generation during live hymn broadcasts using web crawling technology.",
      "RPA solution reducing manual search and transcription time by 90% through automated data extraction.",
    ],
    images: ["/projects/rpa-1.jpg"],
    github: "https://github.com/NiceKim/Python_Lyrics_Crawling/tree/main/rpa",
    tags: ["Python", "RPA", "BeautifulSoup"],
    category: "other",
  },
  {
    id: "8",
    title: "Jewelry Hunter: Java-based 2D Puzzle Adventure",
    description: [
      "2D puzzle adventure game for Windows platform featuring interactive gameplay and visual storytelling elements.",
      "Team-developed Java application with custom GUI interface and comprehensive game logic implementation.",
    ],
    images: ["/projects/java-game-1.png", "/projects/java-game-2.png"],
    tags: ["Java", "Swing", "Git", "GitHub"],
    github: "https://github.com/sukso96100/jewelry_hunter?tab=readme-ov-file",
    video: "https://www.youtube.com/watch?v=aLrWUD4ksNk",
    category: "other",
  },
]

