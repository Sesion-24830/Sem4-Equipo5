import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { SectionPlaceholder } from "@/components/section-placeholder"

export const metadata = {
  title: "Ofertas | La Sazón de Nicolasa",
  description:
    "Promociones, menús del día y descuentos especiales en La Sazón de Nicolasa.",
}

export default function OfertasPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Ofertas y promociones"
        title="Sabor de siempre, precios para consentirte"
        description="Menús del día, combos familiares y promociones de temporada pensados para que disfrutes nuestra cocina sin pretextos."
      />
      <SectionPlaceholder message="Pronto publicaremos las promociones vigentes, el menú del día y descuentos especiales para clientes frecuentes." />
      <SiteFooter />
    </main>
  )
}
