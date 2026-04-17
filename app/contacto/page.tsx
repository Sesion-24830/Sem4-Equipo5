import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { ContactoInfo } from "@/components/contacto-info"
import { ContactoFormMapa } from "@/components/contacto-form-mapa"

export const metadata = {
  title: "Contacto | La Sazón de Nicolasa",
  description:
    "Reserva tu mesa, llámanos o visítanos en el Centro Histórico. La Sazón de Nicolasa te espera con la verdadera sazón casera.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero
        eyebrow="Contáctanos"
        title="Reserva tu mesa y te esperamos"
        description="Encuéntranos en el Centro Histórico, llámanos, escríbenos o reserva en línea. Con gusto te atenderemos para que vivas una experiencia como en casa."
      />
      <ContactoInfo />
      <ContactoFormMapa />
      <SiteFooter />
    </main>
  )
}
