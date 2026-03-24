"use client"

import { useEffect, useRef } from "react"
import { Award, Users, TrendingUp, CheckCircle2 } from "lucide-react"

const highlights = [
  {
    icon: Award,
    title: "A Sınıfı Malzeme",
    description: "En kaliteli inşaat malzemeleri",
  },
  {
    icon: CheckCircle2,
    title: "Yönetmeliklere Uygun",
    description: "Tüm standartlara uygunluk",
  },
  {
    icon: Users,
    title: "Profesyonel Ekip",
    description: "Deneyimli mühendis kadrosu",
  },
  {
    icon: TrendingUp,
    title: "Yüksek Yatırım Değeri",
    description: "Değeri artan projeler",
  },
]

export function AboutSection() {
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
      id="hakkimizda"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-muted"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="animate-on-scroll opacity-0 inline-block px-4 py-2 text-xs font-medium tracking-widest uppercase bg-card text-muted-foreground rounded-full mb-6">
              Hakkımızda
            </span>
            <h2 className="animate-on-scroll opacity-0 animation-delay-100 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
              Kaliteli İşçilik,
              <br />
              <span className="text-accent">Güvenilir Projeler</span>
            </h2>
            <p className="animate-on-scroll opacity-0 animation-delay-200 text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Temizel İnşaat, en kaliteli inşaat malzemelerini titiz işçilikle birleştirerek, tüm yönetmeliklere uygun projeler üretir. Her projemizde müşteri memnuniyetini ve güvenliği ön planda tutuyoruz.
            </p>

            {/* Stats */}
            <div className="animate-on-scroll opacity-0 animation-delay-300 grid grid-cols-3 gap-8 py-8 border-y border-border">
              <div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Yıllık Deneyim</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Tamamlanan Proje</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Mutlu Aile</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`animate-on-scroll opacity-0 animation-delay-${(index + 1) * 100} bg-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
