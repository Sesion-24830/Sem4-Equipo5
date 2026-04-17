"use client"

import { useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ReservacionForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    // Simulación de envío. Tu compañero puede conectar esto a una API o base de datos.
    setTimeout(() => setStatus("success"), 900)
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-border bg-card p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="mt-5 font-serif text-2xl text-card-foreground">
          ¡Solicitud recibida!
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Gracias por tu reserva. Te confirmaremos la disponibilidad por teléfono o correo en
          las próximas horas.
        </p>
        <Button
          variant="outline"
          className="mt-6 bg-transparent"
          onClick={() => setStatus("idle")}
        >
          Hacer otra reserva
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-card p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre completo</Label>
          <Input id="nombre" name="nombre" placeholder="María López" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono</Label>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            placeholder="55 1234 5678"
            required
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="fecha">Fecha</Label>
          <Input id="fecha" name="fecha" type="date" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="hora">Hora</Label>
          <Input id="hora" name="hora" type="time" required />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="personas">Número de personas</Label>
          <Select name="personas" defaultValue="2">
            <SelectTrigger id="personas">
              <SelectValue placeholder="Selecciona" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n} {n === 1 ? "persona" : "personas"}
                </SelectItem>
              ))}
              <SelectItem value="9+">9 o más personas</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="comentarios">Comentarios (opcional)</Label>
          <Textarea
            id="comentarios"
            name="comentarios"
            rows={4}
            placeholder="Alergias, ocasión especial, requerimientos..."
          />
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-8 h-12 w-full text-base"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          "Reservar mesa"
        )}
      </Button>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Al enviar, aceptas que te contactemos para confirmar tu reservación.
      </p>
    </form>
  )
}
