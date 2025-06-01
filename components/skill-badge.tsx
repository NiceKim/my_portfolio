"use client"

import Image from "next/image"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { projects } from "@/data/projects"
import { useCategoryStore } from "@/store/category-store"
import { useEffect } from "react"

interface SkillBadgeProps {
  name: string
  logo: string
  color: string
}

export function SkillBadge({ name, logo, color }: SkillBadgeProps) {
  const badgeUrl = `https://img.shields.io/badge/${name}-${color}?style=for-the-badge&logo=${logo}&logoColor=white`
  const { activeCategory, setActiveCategory, setHighlightedSkill } = useCategoryStore()
  
  // Find the first project that uses this skill
  const projectWithSkill = projects.find(project => 
    project.tags.some(tag => tag.toLowerCase() === name.toLowerCase())
  )

  const handleClick = () => {
    if (projectWithSkill && activeCategory !== 'all' && projectWithSkill.category !== activeCategory) {
      setActiveCategory('all')
    }
   
    setHighlightedSkill(name.toLowerCase())
    setTimeout(() => {
      setHighlightedSkill(null)
    }, 2000)
  }

  const content = (
    <div className="transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-primary/20">
      <Image src={badgeUrl || "/placeholder.svg"} alt={`${name} badge`} width={100} height={22} className="h-7" />
    </div>
  )

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {projectWithSkill ? (
            <Link href={`/#project-${projectWithSkill.id}`} onClick={handleClick}>
              {content}
            </Link>
          ) : (
            content
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p className="capitalize">{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

