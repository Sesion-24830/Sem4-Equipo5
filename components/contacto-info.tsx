import { MapPin, Phone, Mail, Clock } from "lucide-react"

const items = [
  {
    icon: MapPin,
    title: "Dirección",
    lines: ["Calle Hidalgo 142, Centro Histórico", "Ciudad de México, CDMX"],
  },
  {
    icon: Phone,
    title: "Teléfono",
    lines: ["+52 55 1234 5678", "WhatsApp disponible"],
  },
  {
    icon: Mail,
    title: "Correo",
    lines: ["hola@lasazondenicolasa.mx", "reservas@lasazondenicolasa.mx"],
  },
  {
    icon: Clock,
    title: "Horario",
    lines: ["Lun — Jue: 1:00 pm — 10:00 pm", "Vie — Dom: 12:00 pm — 11:00 pm"],
  },
]

export function ContactoInfo() {
  return (
    <section aria-labelledby="contacto-info-heading" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.28em] text-primary">Información</span>
          <h2
            id="contacto-info-heading"
            className="mt-3 font-serif text-3xl text-foreground text-balance sm:text-4xl"
          >
            Estamos para servirte
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            Visítanos, llámanos o escríbenos. Con gusto resolvemos tus dudas y te ayudamos a
            preparar una comida memorable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-card-foreground">{item.title}</h3>
                <div className="mt-2 space-y-1">
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm leading-relaxed text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
