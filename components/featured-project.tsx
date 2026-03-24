"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Sparkles, Building2 } from "lucide-react"

export function FeaturedProject() {
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
      id="one-cikan-proje"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-card"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 inline-block px-4 py-2 text-xs font-medium tracking-widest uppercase bg-muted text-muted-foreground rounded-full mb-6">
            Öne Çıkan Proje
          </span>
          <h2 className="animate-on-scroll opacity-0 animation-delay-100 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Bitinya Evleri
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="animate-on-scroll opacity-0 animation-delay-200 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/bitinya-evleri.jpg"
                alt="Bitinya Evleri - Modern Yaşam Projesi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-2xl shadow-xl">
              <span className="text-sm font-medium">Modern Yaşamın</span>
              <span className="block text-xl font-bold">Güvencesi</span>
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll opacity-0 animation-delay-300">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Modern Yaşamın Güvencesi
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
              Temizel Grup güvencesiyle hayata geçirilen Bitinya Evleri, modern mimarisi, estetik detayları ve sağlam altyapısıyla size sadece bir ev değil, huzurlu bir yaşam sunar.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              Deprem yönetmeliğine uygun, ileri mühendislik teknikleriyle inşa edilen bu proje; kaliteli malzeme kullanımı ve sürdürülebilir yaşam alanlarıyla fark yaratır.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                <Shield className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">Depreme Dayanıklı</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                <Sparkles className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">Premium Malzeme</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                <Building2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">Modern Mimari</span>
              </div>
            </div>

            <Link
              href="#projeler"
              className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors"
            >
              Tüm Projeleri Görüntüle
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
