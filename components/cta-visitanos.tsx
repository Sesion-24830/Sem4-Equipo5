import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaVisitanos() {
  return (
    <section className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/interior.jpg"
          alt="Interior cálido del restaurante La Sazón de Nicolasa"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className="text-xs uppercase tracking-[0.28em] text-accent">Te esperamos</span>
        <h2 className="mt-4 font-serif text-4xl text-background text-balance sm:text-5xl">
          Ven a comer como en casa de la abuela
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-background/80 text-pretty">
          Reserva tu mesa o escríbenos. Nos encanta cocinar para quienes nos visitan por primera vez
          y para quienes ya son parte de la familia.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contacto">Reservar mesa</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-background/40 bg-background/10 px-8 text-base text-background backdrop-blur-sm hover:bg-background hover:text-foreground"
          >
            <Link href="/menu">Ver el menú</Link>
          </Button>
        </div>

        <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2">
            <Clock className="h-5 w-5 text-accent" aria-hidden="true" />
            <dt className="text-xs uppercase tracking-widest text-background/60">Horario</dt>
            <dd className="text-sm text-background">Mar a Dom · 13:00 – 22:00</dd>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
            <dt className="text-xs uppercase tracking-widest text-background/60">Ubicación</dt>
            <dd className="text-sm text-background">Calle Hidalgo 147, Centro</dd>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
            <dt className="text-xs uppercase tracking-widest text-background/60">Teléfono</dt>
            <dd className="text-sm text-background">55 5555 1234</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
