"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Anasayfa", href: "#anasayfa" },
  { name: "Kurumsal", href: "#hakkimizda" },
  { name: "Projeler", href: "#projeler" },
  { name: "Blog", href: "#blog" },
  { name: "İletişim", href: "#iletisim" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#anasayfa" className="flex items-center group">
            <Image
              src="/images/temizel-logo.png"
              alt="Temizel İnşaat Logo"
              width={180}
              height={50}
              className={`h-10 w-auto transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-card/80 hover:text-card"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-4 right-4 h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                  isScrolled ? "bg-foreground" : "bg-card"
                }`} />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#iletisim"
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-card text-foreground hover:bg-card/90"
              }`}
            >
              Teklif Al
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-foreground" : "text-card"
            }`}
            aria-label="Menüyü aç"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className={`flex flex-col gap-1 pt-4 ${
            isScrolled ? "text-foreground" : "text-card"
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isScrolled
                    ? "hover:bg-muted"
                    : "hover:bg-card/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#iletisim"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`mt-4 mx-4 px-6 py-3 text-sm font-medium rounded-full text-center transition-all ${
                isScrolled
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground"
              }`}
            >
              Teklif Al
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
