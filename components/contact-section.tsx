"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Mesajınız başarıyla gönderildi!")
    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  return (
    <section
      id="iletisim"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-muted"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 inline-block px-4 py-2 text-xs font-medium tracking-widest uppercase bg-card text-muted-foreground rounded-full mb-6">
            İletişim
          </span>
          <h2 className="animate-on-scroll opacity-0 animation-delay-100 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Bizimle İletişime Geçin
          </h2>
          <p className="animate-on-scroll opacity-0 animation-delay-200 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Projelerimiz hakkında bilgi almak veya teklif talep etmek için formu doldurun, size en kısa sürede dönelim.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="animate-on-scroll opacity-0 animation-delay-300">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
              İletişim Bilgileri
            </h3>
            
            <div className="space-y-6">
              <a
                href="tel:+905304425341"
                className="flex items-start gap-4 p-4 bg-card rounded-xl hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Phone className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">Telefon</div>
                  <div className="text-muted-foreground">+90 530 442 53 41</div>
                </div>
              </a>

              <a
                href="mailto:bilgi@temizelinsaat.com"
                className="flex items-start gap-4 p-4 bg-card rounded-xl hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">E-posta</div>
                  <div className="text-muted-foreground">bilgi@temizelinsaat.com</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">Adres</div>
                  <div className="text-muted-foreground">
                    Paşadağ Mahallesi Boncuk Sokak No: 23
                    <br />
                    Başiskele / Kocaeli
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll opacity-0 animation-delay-400">
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Teklif Al
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    İsim
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-muted rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-muted rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-muted rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-muted rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none text-foreground placeholder:text-muted-foreground"
                    placeholder="Mesajınızı yazın..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
