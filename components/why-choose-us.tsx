"use client"

import { useEffect, useRef } from "react"
import { Shield, MapPin, Trees, Gem } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Deprem Yönetmeliğine Uygun Yapı",
    description: "Tüm projelerimiz güncel deprem yönetmeliklerine uygun olarak inşa edilmektedir.",
  },
  {
    icon: MapPin,
    title: "Ulaşım Kolaylığı",
    description: "Merkezi konumlarda, toplu taşıma ve ana yollara kolay erişim imkanı.",
  },
  {
    icon: Trees,
    title: "Sosyal Yaşam Alanları",
    description: "Yeşil alanlar, oyun parkları ve sosyal tesislerle zenginleştirilmiş yaşam.",
  },
  {
    icon: Gem,
    title: "Kaliteli Malzeme ve İç Tasarım",
    description: "Premium malzemeler ve modern iç mimari tasarımlarla üstün kalite.",
  },
]

export function WhyChooseUs() {
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
      className="py-24 lg:py-32 bg-primary text-primary-foreground"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 inline-block px-4 py-2 text-xs font-medium tracking-widest uppercase bg-primary-foreground/10 text-primary-foreground/80 rounded-full mb-6">
            Neden Biz?
          </span>
          <h2 className="animate-on-scroll opacity-0 animation-delay-100 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Neden Temizel İnşaat?
          </h2>
          <p className="animate-on-scroll opacity-0 animation-delay-200 text-lg text-primary-foreground/70 max-w-2xl mx-auto text-pretty">
            Kalite, güven ve müşteri memnuniyeti odaklı yaklaşımımızla fark yaratıyoruz.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`animate-on-scroll opacity-0 animation-delay-${(index + 1) * 100} group text-center p-8 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors duration-300`}
            >
              <div className="w-16 h-16 mx-auto bg-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
