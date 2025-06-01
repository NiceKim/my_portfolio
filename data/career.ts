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
    title: "Web Developer Intern",
    company: "Docentron",
    range: "DEC 2024 - APR 2025",
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
      "- Beyond my data analyst responsibilities, designed a database using Qlik that integrated around 45,000 daily records from multiple corporate systems.",
      "- Built end-to-end data pipeline from raw data extraction to interactive data visualizations using SQL to deliver actionable insights."
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
      "- Collaborated with other teams to coordinate production trial runs and manage project documentation, to guarantee smooth project execution.",
      "- Managed KPI tracking for 100+ projects, delivering weekly reports to resolve bottlenecks and driving 3 years of continuous target achievement."
    ],
    logo: "career-lg.png",
  },
]

