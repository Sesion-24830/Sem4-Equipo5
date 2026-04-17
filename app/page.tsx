import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { PlatosDestacados } from "@/components/platos-destacados"
import { CtaVisitanos } from "@/components/cta-visitanos"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <PlatosDestacados />
      <CtaVisitanos />
      <SiteFooter />
    </main>
  )
}
