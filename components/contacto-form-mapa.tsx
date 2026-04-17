import { MapPin } from "lucide-react"
import { ReservacionForm } from "@/components/reservacion-form"

export function ContactoFormMapa() {
  return (
    <section aria-labelledby="reservar-heading" className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-primary">Reservaciones</span>
            <h2
              id="reservar-heading"
              className="mt-3 font-serif text-3xl text-foreground text-balance sm:text-4xl"
            >
              Aparta tu mesa en La Sazón
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              Completa el formulario con los datos de tu visita. Recomendamos reservar con al
              menos 24 horas de anticipación, sobre todo los fines de semana.
            </p>

            <div className="mt-8">
              <ReservacionForm />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.28em] text-primary">Cómo llegar</span>
            <h2 className="mt-3 font-serif text-3xl text-foreground text-balance sm:text-4xl">
              Ven a visitarnos
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              Estamos en el corazón del Centro Histórico, a dos cuadras del Zócalo. Contamos con
              estacionamiento cercano y acceso en transporte público.
            </p>

            <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
              <div className="aspect-[4/3] w-full">
                <iframe
                  title="Mapa de ubicación de La Sazón de Nicolasa"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-99.1400%2C19.4300%2C-99.1280%2C19.4380&layer=mapnik&marker=19.4340%2C-99.1340"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex items-start gap-3 border-t border-border p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-serif text-lg text-card-foreground">
                    Calle Hidalgo 142, Centro Histórico
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Ciudad de México, CDMX — C.P. 06010
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
