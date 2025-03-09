"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ImageCarouselProps {
  images: string[]
  title: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ImageCarousel({ images, title, open, onOpenChange }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      previousImage()
    } else if (e.key === "ArrowRight") {
      nextImage()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-5xl w-full h-[80vh] p-0 bg-background/95 backdrop-blur-sm"
        onKeyDown={handleKeyDown}
      >
        <div className="relative w-full h-full flex flex-col">
          {/* Close button - DialogContent already has a built-in close button, so we don't need this one */}
          {/* <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-50"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button> */}

          {/* Main image */}
          <div className="relative flex-1 w-full">
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${title} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation and thumbnails */}
          <div className="p-4 bg-background/90 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" size="icon" onClick={previousImage}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm">
                {currentIndex + 1} / {images.length}
              </span>
              <Button variant="ghost" size="icon" onClick={nextImage}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={image}
                  className={`relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden ${
                    index === currentIndex ? "ring-2 ring-primary" : "opacity-70"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

