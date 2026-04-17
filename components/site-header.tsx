"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Menú", href: "/menu" },
  { label: "Ofertas", href: "/ofertas" },
  { label: "Contacto", href: "/contacto" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
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

        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-foreground/80",
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contacto">Reservar mesa</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-border/60 bg-background transition-[max-height] duration-300 ease-out",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav aria-label="Navegación móvil" className="flex flex-col px-4 py-4 gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-foreground/90 hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            <Link href="/contacto">Reservar mesa</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
