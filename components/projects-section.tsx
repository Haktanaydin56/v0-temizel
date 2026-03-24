"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const projects = {
  ongoing: [
    {
      title: "Bitinya Evleri",
      location: "Başiskele / Kocaeli",
      image: "/images/bitinya-evleri.jpg",
      status: "Devam Ediyor",
      units: "31 Daire",
    },
  ],
  completed: [
    {
      title: "Zeytinli Bahçe Evleri",
      location: "Başiskele / Kocaeli",
      image: "/images/completed-project.jpg",
      status: "Tamamlandı",
      units: "24 Daire",
    },
  ],
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState<"ongoing" | "completed">("ongoing")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const currentProjects = projects[activeTab]

  return (
    <section
      id="projeler"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-card"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 inline-block px-4 py-2 text-xs font-medium tracking-widest uppercase bg-muted text-muted-foreground rounded-full mb-6">
            Projelerimiz
          </span>
          <h2 className="animate-on-scroll opacity-0 animation-delay-100 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Modern Yaşam Alanları
          </h2>
          <p className="animate-on-scroll opacity-0 animation-delay-200 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Modern mimariyle tasarlanan projelerimiz, konforlu ve güvenli yaşam alanları sunar.
          </p>
        </div>

        {/* Tabs */}
        <div className="animate-on-scroll opacity-0 animation-delay-300 flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("ongoing")}
            className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
              activeTab === "ongoing"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Devam Eden Projeler
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
              activeTab === "completed"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Tamamlanan Projeler
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={project.title}
              className={`animate-on-scroll opacity-0 animation-delay-${(index + 1) * 100} group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.status === "Devam Ediyor"
                      ? "bg-accent text-accent-foreground"
                      : "bg-card text-foreground"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{project.location}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{project.units}</span>
                  <button className="flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                    Detaylar
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
