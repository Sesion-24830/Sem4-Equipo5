import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { SectionPlaceholder } from "@/components/section-placeholder"

export const metadata = {
  title: "Menú | La Sazón de Nicolasa",
  description:
    "Descubre nuestro menú de cocina tradicional mexicana hecho con recetas de familia.",
}

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Nuestro menú"
        title="Recetas que han cruzado generaciones"
        description="Entradas, platos fuertes, postres y bebidas preparados con ingredientes frescos, chiles tostados al momento y el cariño de siempre."
      />
      <SectionPlaceholder message="Aquí aparecerá el menú completo con categorías, descripciones y precios. Estamos preparando el contenido con calma." />
      <SiteFooter />
    </main>
  )
}
