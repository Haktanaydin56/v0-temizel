import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProject } from "@/components/featured-project"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProjectFeatures } from "@/components/project-features"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedProject />
      <AboutSection />
      <ProjectsSection />
      <WhyChooseUs />
      <ProjectFeatures />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
