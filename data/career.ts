export type CareerItem = {
  id: string
  title: string
  company: string
  range: string
  description: string[]
  logo: string
}

export const career: CareerItem[] = [
  {
    id: "1",
    title: "Intern",
    company: "Need Property",
    range: "DEC 2024 - NOW",
    description: [
      "- Developed and maintained a WordPress website for a real estate business.",
      "- Optimized website for SEO to improve search visibility.",
      "- Configured and customized plugins for property and agent management."
    ],
    logo: "career-needproperty.jpg", 
  },
  {
    id: "2",
    title: "Data Analyst",
    company: "LG Electronics Inc, Vietnam",
    range: "OCT 2021 - SEP 2022",
    description: [
      "- Analyzed data to minimize wasted materials, resulting in total savings of 21 million USD over one year.",
      "- Took the initiative to design a database for collecting and integratingaround 45,000 daily records from multiple corporate systems, and pre-processed the data to ensure accurate integration.",
      "- Developed data visualizations using SQL to deliver actionable insights."
    ],
    logo: "career-lg.png",
  },
  {
    id: "3",
    title: "Project manager",
    company: "LG Electronics Inc, Vietnam",
    range: "AUG 2019 - SEP 2022",
    description:[
      "- Ensured timely readiness for mass production of IVI (In-VehicleInfotainment) systems by overseeing key metrics such as defect ratesand production rates, achieving a 73% defect reduction.",
      "- Collaborated with other teams to coordinate production trial runs andmanage project documentation, to guarantee smooth project execution.",
      "- Tracked and reported KPIs and project status for the entire team."
    ],
    logo: "career-lg.png",
  },
]

