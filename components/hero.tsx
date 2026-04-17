import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-mole.jpg"
          alt="Plato tradicional de mole poblano servido en talavera"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/55 to-foreground/85" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-background/10 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-accent backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Tradición desde 1982
          </span>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-background text-balance sm:text-6xl lg:text-7xl">
            El sabor de la abuela,
            <span className="block italic text-accent">servido con el alma.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/85 text-pretty">
            En La Sazón de Nicolasa cocinamos como en casa: con molcajete, leña y recetas que han pasado
            de mano en mano por cuatro generaciones. Cada platillo es un pedacito de nuestra historia.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-7 text-base"
            >
              <Link href="/menu">
                Ver nuestro menú
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-7 text-base border-background/40 bg-background/10 text-background hover:bg-background hover:text-foreground backdrop-blur-sm"
            >
              <Link href="/contacto">Reservar una mesa</Link>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-2xl">
            <div className="flex items-start gap-3 border-l border-accent/50 pl-4">
              <Clock className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <dt className="text-xs uppercase tracking-widest text-background/70">Horario</dt>
                <dd className="mt-1 text-sm text-background">Mar a Dom · 13:00 – 22:00</dd>
              </div>
            </div>
            <div className="flex items-start gap-3 border-l border-accent/50 pl-4">
              <MapPin className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <dt className="text-xs uppercase tracking-widest text-background/70">Ubicación</dt>
                <dd className="mt-1 text-sm text-background">Calle Hidalgo 147, Centro</dd>
              </div>
            </div>
            <div className="flex items-start gap-3 border-l border-accent/50 pl-4">
              <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-accent" aria-hidden="true">
                ★
              </span>
              <div>
                <dt className="text-xs uppercase tracking-widest text-background/70">Reseñas</dt>
                <dd className="mt-1 text-sm text-background">4.9 · +1,200 comensales</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
