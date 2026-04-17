import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const platos = [
  {
    nombre: "Mole Poblano",
    descripcion:
      "Nuestra receta insignia: más de 20 ingredientes molidos en metate, servido con pollo de rancho.",
    precio: "$185",
    imagen: "/images/hero-mole.jpg",
    etiqueta: "El favorito",
  },
  {
    nombre: "Tacos al Pastor",
    descripcion:
      "Carne marinada en adobo de achiote y chiles, cocinada al trompo con piña fresca.",
    precio: "$120",
    imagen: "/images/tacos.jpg",
    etiqueta: "Tradicional",
  },
  {
    nombre: "Pozole Rojo",
    descripcion:
      "Caldo profundo de chiles guajillo y ancho con maíz cacahuazintle y carne tierna.",
    precio: "$155",
    imagen: "/images/pozole.jpg",
    etiqueta: "De la casa",
  },
]

export function PlatosDestacados() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.28em] text-primary">
              Los consentidos de la casa
            </span>
            <h2 className="mt-3 font-serif text-4xl text-foreground text-balance sm:text-5xl">
              Platillos que saben a historia
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              Una probadita de lo que te espera en nuestra mesa. Cada receta ha sido cuidada por
              generaciones para que llegue a ti con el mismo sabor de siempre.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link href="/menu">
              Ver menú completo
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {platos.map((plato) => (
            <li
              key={plato.nombre}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={plato.imagen || "/placeholder.svg"}
                  alt={plato.nombre}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-[11px] uppercase tracking-widest text-primary backdrop-blur-sm">
                  {plato.etiqueta}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl text-foreground">{plato.nombre}</h3>
                  <span className="font-serif text-xl text-primary">{plato.precio}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {plato.descripcion}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
