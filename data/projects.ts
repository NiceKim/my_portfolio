export type Project = {
  id: number
  title: string
  description: string[]
  images: string[]
  video?: string 
  tags: string[]
  github?: string
  demo?: string
  category: "web" | "other"
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 9,
    title: "Dragon SamuraiZ: Real-time Multiplayer Web Game",
    featured: true,
    description: [
      "Enter a real-time 1v1 duel where every move demands strategy, timing, and reading your opponent - welcome to Dragon SamuraiZ",
      "The game features a mobile-friendly, real-time multiplayer interface built with React. While Socket.IO enables matchmaking, synchronized actions, and smooth gameplay across devices.",
      "Deployed as a full-stack application on AWS, the game is accessible anytime, anywhere",
    ],
    images: [
      "/projects/dragon-samuraiz-1.png",
      "/projects/dragon-samuraiz-2.png",
      "/projects/dragon-samuraiz-3.png",
      "/projects/dragon-samuraiz-4.png",
    ],
    tags: ["Node.js", "AWS EC2", "React", "Socket.IO", "Express.js"],
    github: "https://github.com/NiceKim/dragon-samuraiz",
    demo: "http://dragon-samurai-z-env.eba-bdb4qx2n.ap-southeast-1.elasticbeanstalk.com/",
    category: "web",
  },
  {
    id: 8,
    title: "Deep Learning Fraud Detection During Online Assessment",
    featured: true,
    description: [
      "Can mouse movement reveal cheating?",
      "This deep learning fraud detection system says YES - with 96% accuracy in just 0.09 seconds.",
      "An LSTM model analyzes subtle patterns in time-series cursor behavior during online assessments to flag suspicious activity in real time.",
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
    id: 7,
    title: "Stray Spotter: Cloud-based Web Service",
    featured: true,
    description: [
      "Share lovely photos of community cats – and contribute to monitoring their welfare and population.",
      "Stray Spotter is a cloud-based platform that enables photo sharing and automatic metadata extraction to support data-driven monitoring.",
      "Built with a containerized architecture following MSA principles, with modular services for gallery, reporting, and community interaction.",
    ],
    images: [
      "/projects/stray-spotter-0.png",
      "/projects/stray-spotter-1.png",
      "/projects/stray-spotter-2.png",
      "/projects/stray-spotter-3.png",
      "/projects/stray-spotter-4.png",
    ],
    tags: ["Node.js", "Typescript", "AWS S3", "AWS EC2", "AWS RDS", "MySQL", "Express.js", "Docker", "Next.js", "Jest", "Swagger", "Javascript", "Rest API"],
    github: "https://github.com/NiceKim/strayspotter",
    category: "web",
  },
  {
    id: 6,
    title: "Responsive Portfolio Website",
    description: [
      "This is a responsive and interactive portfolio site designed to showcase my projects, skills, and achievements.",
      "A modern full-stack application featuring responsive design, interactive keyword search, and project filtering"
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
    id: 5,
    title: "Word Monster: Gamified Language Learning on Android",
    description: [
      "Word Monster is a gamified language learning app built to make learning fun and engaging.",
      "It features a competitive leaderboard system, global ranking integration, and a scalable MVVM architecture.",
    ],
    images: ["/projects/word-monster-1.png"],
    tags: ["Kotlin", "Android Studio"],
    category: "other",
  },
  {
    id: 4,
    title: "AI BI: AI-Powered Business Intelligence Web Application",
    description: [
      "AI-BI is an AI-driven platform automatically generating business intelligence charts from raw user data.",
      "Interactive React-based frontend delivering intuitive data visualization and exploration experience."
    ],
    images: ["/projects/aibi-1.png", "/projects/aibi-2.png"],
    tags: ["React", "BI"],
    category: "web",
  },
  {
    id: 3,
    title: "EasyGo: Travel App Design with HCI Principles",
    description: [
      "EasyGo is a prototype travel app that unifies food, accommodation, and attraction searches with AI-supported trip planning.",
      "Designed with a focus on Human–Computer Interaction, it achieved a 12% usability improvement through user testing and iterative optimization.",
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
    id: 2,
    title: "Lyrics Crawler: Python RPA for Subtitle Automation",
    description: [
      "Lyrics Crawler is a Python-based automation tool I built to help my church's live broadcasts by automatically generating hymn subtitles through web crawling.",
      "This RPA solution reduces manual search and transcription time by over 90% through automated data extraction.",
    ],
    images: ["/projects/rpa-1.jpg"],
    github: "https://github.com/NiceKim/Python_Lyrics_Crawling/tree/main/rpa",
    tags: ["Python", "RPA", "BeautifulSoup"],
    category: "other",
  },
  {
    id: 1,
    title: "Jewelry Hunter: Java-based 2D Puzzle Adventure",
    description: [
      "Jewelry Hunter is a 2D puzzle adventure game for Windows, developed in Java.",
      "Our team collaborated on game design, logic, and system implementation, building a custom interface with Java Swing to create an engaging gameplay experience.",
    ],
    images: ["/projects/java-game-1.png", "/projects/java-game-2.png"],
    tags: ["Java", "Swing", "Git", "GitHub"],
    github: "https://github.com/sukso96100/jewelry_hunter?tab=readme-ov-file",
    video: "https://www.youtube.com/watch?v=aLrWUD4ksNk",
    category: "other",
  },
]

