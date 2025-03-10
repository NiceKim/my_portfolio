"use client"

import Image from "next/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SkillBadgeProps {
  name: string
  logo: string
  color: string
}

export function SkillBadge({ name, logo, color }: SkillBadgeProps) {
  const badgeUrl = `https://img.shields.io/badge/${name}-${color}?style=for-the-badge&logo=${logo}&logoColor=white`

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-primary/20">
            <Image src={badgeUrl || "/placeholder.svg"} alt={`${name} badge`} width={100} height={22} className="h-7" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="capitalize">{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

