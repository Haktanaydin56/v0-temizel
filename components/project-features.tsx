"use client"

import { useEffect, useRef } from "react"
import { Building2, Home, Ruler, Waves, Hospital, ShoppingBag, MapPinned } from "lucide-react"

const specs = [
  { icon: Ruler, value: "3.307 m²", label: "Proje Alanı" },
  { icon: Building2, value: "2", label: "Blok" },
  { icon: Home, value: "31", label: "Daire" },
  { icon: ShoppingBag, value: "4", label: "İşyeri" },
]

const distances = [
  { icon: Waves, value: "3 dk", label: "Sahile" },
  { icon: Hospital, value: "10 dk", label: "Şehir Hastanesine" },
  { icon: ShoppingBag, value: "5 dk", label: "AVM'ye" },
  { icon: MapPinned, value: "7 dk", label: "Şehir Merkezine" },
]

export function ProjectFeatures() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-muted"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 inline-block px-4 py-2 text-xs font-medium tracking-widest uppercase bg-card text-muted-foreground rounded-full mb-6">
            Proje Detayları
          </span>
          <h2 className="animate-on-scroll opacity-0 animation-delay-100 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Genel Özellikler
          </h2>
          <p className="animate-on-scroll opacity-0 animation-delay-200 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Bitinya Evleri, modern yaşamın tüm gereksinimlerini karşılayan detaylarla tasarlandı.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="animate-on-scroll opacity-0 animation-delay-300 grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="bg-card p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 mx-auto bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <spec.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                {spec.value}
              </div>
              <div className="text-sm text-muted-foreground">{spec.label}</div>
            </div>
          ))}
        </div>

        {/* Apartment Types */}
        <div className="animate-on-scroll opacity-0 animation-delay-400 bg-card p-8 rounded-2xl shadow-sm mb-12">
          <h3 className="font-serif text-xl font-bold text-foreground mb-6 text-center">
            Daire Seçenekleri
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-muted rounded-full">
              <span className="font-medium text-foreground">3+1 Daireler</span>
            </div>
            <div className="px-6 py-3 bg-muted rounded-full">
              <span className="font-medium text-foreground">4+1 Daireler</span>
            </div>
          </div>
        </div>

        {/* Distances */}
        <div className="animate-on-scroll opacity-0 animation-delay-500">
          <h3 className="font-serif text-xl font-bold text-foreground mb-8 text-center">
            Mesafeler
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {distances.map((distance) => (
              <div
                key={distance.label}
                className="bg-card p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 mx-auto bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <distance.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="font-serif text-xl font-bold text-foreground mb-1">
                  {distance.value}
                </div>
                <div className="text-sm text-muted-foreground">{distance.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
