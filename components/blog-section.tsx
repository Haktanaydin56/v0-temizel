"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"

const blogPosts = [
  {
    title: "Bitinya Evleri Projesi Devam Ediyor",
    excerpt: "Modern mimarisi ve premium özellikleriyle Bitinya Evleri projemizde inşaat çalışmaları hızla devam ediyor.",
    image: "/images/blog-1.jpg",
    date: "15 Mart 2026",
    category: "Proje Haberleri",
  },
  {
    title: "Zeytinli Bahçe Evleri'nde Yaşam Başladı",
    excerpt: "Tamamlanan Zeytinli Bahçe Evleri projemizde aileler yeni evlerine taşınmaya başladı.",
    image: "/images/blog-2.jpg",
    date: "28 Şubat 2026",
    category: "Tamamlanan Projeler",
  },
  {
    title: "Yeni Projeler Yolda",
    excerpt: "Temizel İnşaat olarak 2026 yılında hayata geçireceğimiz yeni projelerimizin hazırlıkları devam ediyor.",
    image: "/images/blog-3.jpg",
    date: "10 Şubat 2026",
    category: "Duyurular",
  },
]

export function BlogSection() {
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
      id="blog"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-card"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 inline-block px-4 py-2 text-xs font-medium tracking-widest uppercase bg-muted text-muted-foreground rounded-full mb-6">
            Blog & Haberler
          </span>
          <h2 className="animate-on-scroll opacity-0 animation-delay-100 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Son Gelişmeler
          </h2>
          <p className="animate-on-scroll opacity-0 animation-delay-200 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Projelerimiz ve sektördeki gelişmeler hakkında en güncel haberleri takip edin.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className={`animate-on-scroll opacity-0 animation-delay-${(index + 1) * 100} group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-card text-foreground">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                  Devamını Oku
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
