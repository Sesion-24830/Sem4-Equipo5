import { Construction } from "lucide-react"

type SectionPlaceholderProps = {
  message?: string
}

export function SectionPlaceholder({
  message = "Esta sección está en construcción. Muy pronto encontrarás aquí todo el contenido.",
}: SectionPlaceholderProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-card p-12 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Construction className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="mt-6 font-serif text-2xl text-foreground">Próximamente</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground text-pretty">
            {message}
          </p>
        </div>
      </div>
    </section>
  )
}
