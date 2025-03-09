"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play, ImageIcon } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/data/projects"
import { ImageCarousel } from "./image-carousel"

export default function ProjectCard({ project }: { project: Project }) {
  const [showCarousel, setShowCarousel] = useState(false)

  return (
    <>
      <Card className="overflow-hidden">
        <div className="relative aspect-video">
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3">{project.title}</h3>
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
              <Badge key={tag}>{tag}</Badge>
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

