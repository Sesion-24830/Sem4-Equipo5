import Link from "next/link"
import { UtensilsCrossed, Instagram, Facebook } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <UtensilsCrossed className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-semibold text-foreground">La Sazón</span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  de Nicolasa
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Cocina tradicional mexicana con recetas de familia. Desde 1982, cocinando con la
              misma olla, el mismo fuego y el mismo amor.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Explorar</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/" className="text-foreground hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-foreground hover:text-primary">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-foreground hover:text-primary">
                  Menú
                </Link>
              </li>
              <li>
                <Link href="/ofertas" className="text-foreground hover:text-primary">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-foreground hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground">Visítanos</h3>
            <address className="mt-4 space-y-3 text-sm not-italic text-foreground">
              <p>
                Calle Hidalgo 147
                <br />
                Centro Histórico
                <br />
                Ciudad de México
              </p>
              <p className="text-muted-foreground">
                <Link href="tel:+525555551234" className="hover:text-primary">
                  55 5555 1234
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="mailto:reservas@lasazondenicolasa.mx" className="hover:text-primary">
                  reservas@lasazondenicolasa.mx
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} La Sazón de Nicolasa. Hecho con cariño en México.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-primary">
              Aviso de privacidad
            </Link>
            <Link href="#" className="hover:text-primary">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
