"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play, ImageIcon } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/data/projects"
import { ImageCarousel } from "./image-carousel"
import { useCategoryStore } from "@/store/category-store"
import { cn } from "@/lib/utils"

export default function ProjectCard({ project }: { project: Project }) {
  const [showCarousel, setShowCarousel] = useState(false)
  const [hoveredTag, setHoveredTag] = useState<string | null>(null)
  const { highlightedSkill } = useCategoryStore()

  const isHighlighted = highlightedSkill && project.tags.some(
    tag => tag.toLowerCase() === highlightedSkill.toLowerCase()
  )

  return (
    <>
      <Card 
        id={`project-${project.id}`}
        className={cn(
          "overflow-hidden transition-all duration-300",
          isHighlighted
            ? "scale-105 shadow-xl ring-2 ring-primary"
            : "shadow-lg hover:scale-105 hover:shadow-xl"
        )}
      >
        <div className="relative aspect-video">
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
          {project.featured && (
            <span className="inline-block mb-2 px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-900 dark:text-yellow-200">Featured Project</span>
          )}
          <p className="text-muted-foreground mb-4">
            {
              project.description.map((sentence, index) => (
              <span key={index}>
                {sentence}
                <br />
              </span>
              ))
            }
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge 
                key={tag}
                variant={(hoveredTag === tag || highlightedSkill?.toLowerCase() === tag.toLowerCase()) ? "default" : "secondary"}
                className="transition-colors duration-200"
                onMouseEnter={() => setHoveredTag(tag)}
                onMouseLeave={() => setHoveredTag(null)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-3">
          {project.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {project.demo && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
          )}
          {project.video && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.video} target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 h-4 w-4" />
                Video
              </a>
            </Button>
          )}
          {project.images.length > 0 && (
            <Button variant="outline" size="sm" onClick={() => setShowCarousel(true)}>
              <ImageIcon className="mr-2 h-4 w-4" />
              Images
            </Button>
          )}
        </CardFooter>
      </Card>

      <ImageCarousel images={project.images} title={project.title} open={showCarousel} onOpenChange={setShowCarousel} />
    </>
  )
}

