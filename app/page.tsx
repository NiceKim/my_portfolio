"use client"

import type React from "react"

import { Mail, Github, Linkedin, Building2, GraduationCap, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/project-card"
import ThemeToggle from "./components/theme-toggle"
import { profile } from "@/data/profile"
import { skills } from "@/data/skills"
import { projects } from "@/data/projects"
import { career } from "@/data/career"
import { useState } from "react"
import Image from "next/image"
import { SkillBadge } from "@/components/skill-badge"

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [contactForm, setContactForm] = useState({
    subject: "",
    message: "",
    email: "",
    name: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  const filteredProjects = projects.filter((project) =>
    activeCategory === "all" ? true : project.category === activeCategory,
  )

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitStatus({
        success: true,
        message: "Your message has been sent successfully!",
      })
      setContactForm({
        subject: "",
        message: "",
        email: "",
        name: "",
      })
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : "Failed to send message",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header - Adjusted padding */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Building2 className="h-6 w-6" />
            <span className="font-bold">Portfolio</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </a>
            <a href="#career" className="text-sm font-medium hover:text-primary">
              Career
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild>
              <a href={`mailto:${profile.email}`}>Get in Touch</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="space-y-24 md:space-y-32">
        {/* Hero Section - Adjusted padding */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-800 dark:from-purple-900 dark:to-purple-600" />
          <div className="relative container pt-24 pb-32 md:pt-40 md:pb-48">
            <div className="flex flex-col items-center text-center space-y-6 text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                {profile.role}
              </h1>
              <p className="max-w-[600px] text-lg md:text-xl text-white/90">{profile.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10" asChild>
                  <a
                    href={profile.cv}
                    download="jowoon-kim-cv.pdf"
                    onClick={(e) => {
                      // Prevent default if file doesn't exist
                      if (!profile.cv) e.preventDefault()
                    }}
                  >
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">{profile.about}</p>
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span>{profile.education}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>{profile.experience}</span>
                  </div>
                </div>
                <div className="flex gap-4 pt-6">
                  <Button variant="outline" size="icon" asChild>
                    <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={`mailto:${profile.email}`}>
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/50 to-primary/30 blur-2xl opacity-50" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={profile.image || "/placeholder.svg"}
                    alt="Profile photo"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Fixed mapping */}
        <section id="skills" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Skills & Expertise
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <Card key={skill.title} className="transition-all duration-300 hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) =>
                        item.logo ? (
                          <SkillBadge key={item.name} name={item.name} logo={item.logo} color={item.color || "gray"} />
                        ) : (
                          <Badge
                            key={item.name}
                            variant="secondary"
                            className="transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-primary/20 cursor-pointer"
                          >
                            {item.name}
                          </Badge>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section - Fixed structure */}
        <section id="projects" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Featured Projects
            </h2>
            <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveCategory}>
              <TabsList className="flex justify-center">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="mobile">Mobile Development</TabsTrigger>
                <TabsTrigger value="other">Other Projects</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Career Section - Updated with logo */}
        <section id="career" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Career Journey
            </h2>
            <div className="space-y-8">
              {career.map((item) => (
                <Card key={item.id}>
                  <CardContent className="pt-6">
                    <div className="flex gap-6">
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-background">
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={`${item.company} logo`}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-muted-foreground">{item.company}</p>
                          </div>
                          <span className="text-muted-foreground md:text-right">{item.range}</span>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Updated with mailto functionality */}
        <section id="contact" className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have a project in mind? Let's work together to bring your ideas to life.
              </p>
              <form className="space-y-4" onSubmit={handleContactSubmit}>
                <Input
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))}
                />
                <Input
                  placeholder="Your Email"
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                  required
                />
                <Input
                  placeholder="Subject"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm((prev) => ({ ...prev, subject: e.target.value }))}
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[150px]"
                  value={contactForm.message}
                  onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
                  required
                />
                {submitStatus && (
                  <div
                    className={`p-3 rounded-md ${
                      submitStatus.success
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js and Tailwind CSS. Deployed on Vercel.
          </p>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

