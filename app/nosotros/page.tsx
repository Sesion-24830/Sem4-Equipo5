import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { SectionPlaceholder } from "@/components/section-placeholder"

export const metadata = {
  title: "Nosotros | La Sazón de Nicolasa",
  description:
    "Conoce la historia, la familia y la tradición detrás de La Sazón de Nicolasa.",
}

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Nuestra historia"
        title="Una familia cocinando con el alma"
        description="Desde 1982, Doña Nicolasa y su familia han llenado esta casa de aromas, sabores y recuerdos. Aquí contamos quiénes somos y cómo llegamos hasta ti."
      />
      <SectionPlaceholder message="Pronto conocerás la historia completa de Doña Nicolasa, nuestra filosofía de cocina y al equipo que hace posible cada platillo." />
      <SiteFooter />
    </main>
  )
}
