"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
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
      id="anasayfa"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-building.jpg"
          alt="Modern mimari yapı"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="animate-on-scroll opacity-0 animation-delay-100 mb-8">
            <Image
              src="/images/temizel-logo.png"
              alt="Temizel İnşaat Logo"
              width={280}
              height={80}
              className="mx-auto brightness-0 invert"
              style={{ height: "64px", width: "auto" }}
              priority
            />
          </div>

          {/* Badge */}
          <div className="animate-on-scroll opacity-0 animation-delay-150">
            <span className="inline-block px-4 py-2 text-xs font-medium tracking-widest uppercase bg-card/10 backdrop-blur-sm text-card rounded-full border border-card/20 mb-8">
              Güvenle inşa eder, huzurla yaşatır
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-on-scroll opacity-0 animation-delay-200 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-card leading-tight text-balance mb-8">
            Geleceği Güvenle
            <br />
            <span className="text-accent">İnşa Ediyoruz</span>
          </h1>

          {/* Subheading */}
          <p className="animate-on-scroll opacity-0 animation-delay-300 text-lg md:text-xl text-card/80 max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
            Temizel İnşaat, modern mimari, sağlam altyapı ve estetik yaşam alanlarıyla geleceğinizi inşa eder.
          </p>

          {/* CTA Buttons */}
          <div className="animate-on-scroll opacity-0 animation-delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#projeler"
              className="group flex items-center gap-2 px-8 py-4 bg-card text-foreground font-medium rounded-full hover:bg-card/90 transition-all duration-300"
            >
              Projeleri İncele
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#iletisim"
              className="flex items-center gap-2 px-8 py-4 bg-transparent text-card font-medium rounded-full border border-card/30 hover:bg-card/10 transition-all duration-300"
            >
              İletişime Geç
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-on-scroll opacity-0 animation-delay-500 absolute bottom-8 left-1/2 -translate-x-1/2">
          <Link
            href="#one-cikan-proje"
            className="flex flex-col items-center gap-2 text-card/60 hover:text-card transition-colors"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Keşfet</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
