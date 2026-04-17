import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Nosotros | La Sazón de Nicolasa",
  description:
    "Conoce la historia, la familia y la tradición detrás de La Sazón de Nicolasa.",
}

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[819px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8NdjsH67M9bzbm5H0EfEM3uT-jmrTjEKg9ohDSwH9rILhVGnYXYIrZaWormnduPqfaJ4a5f77QkQ5Vr_vhfir5WEUQcQM_StRTWPL1xaaM7zlcvNKVJlEmcdkEFtL8sVB2QkJJMs0p6kKydwN1pUCnIaOVe50XUz3R0vALMoPGTbs7DrhVz5V93ilykNTzqyRN7fPXTKu24igrAi14yFw8jlizwd60cA6CU2ZoUz-hNFS9v_ZuJZv6x1dIJeN3c-1dxNPhitVEuw"
            alt="Cocina tradicional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-8xl text-white font-serif italic mb-6 leading-tight">
            Nuestra Historia: <br />El Sabor de la Tradición
          </h1>
          <p className="text-xl md:text-2xl italic opacity-90 text-white/80">
            "Donde cada especia cuenta un secreto y cada fuego guarda un recuerdo."
          </p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-5xl text-primary italic">
              El Legado de Nicolasa
            </h2>

            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Todo comenzó en un pequeño rincón de la cocina de mi abuela
                Clara...
              </p>
              <p>
                Nuestra filosofía es simple: respeto absoluto por la tierra...
              </p>
              <p>
                En "La Sazón de Nicolasa", cada plato es un puente entre el
                pasado y el presente...
              </p>
            </div>

            <div className="flex items-center gap-4 py-4 border-t">
              <span className="text-xl italic text-tertiary">
                Nicolasa Rodríguez
              </span>
              <span className="text-sm uppercase tracking-widest">
                Fundadora & Chef Principal
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="aspect-[4/5] rounded-xl overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-h-iEPNQWjIP22QaZ7dI62eKwwXj6Zzk-hYBv-_8bcP02KZgTCU4JmHIitbqBMPdUq2M2iThdm90wFX0GMGKd6WcV92_WhT-TjGLaMi7G9fIdgksKG89IkA_zW-eHke1dnIHhiKvnY_tguoIIMDgOGUn6-0CS-QFWfzHmg78xvR7XDrq-fW1e2_N0-O2B6BNrX9qImCN5-4LDQ1QQxgsBMKYB0DZ9RsJkQjw5puUj2zb09tZ__9TtpGXnpocoRNN4U6hRigZTsqs"
                alt="Chef trabajando"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENTO / GALERÍA */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 italic">Corazón y Fuego</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdFMMI-GRBQhkR59B_E2BmJtw68TOXSXVsWsCruo_Kutp2hoAHngN4VchWmmT8AlG8kULvSUypH6SNWTcTejOaqVeW_vz3FjsAJWkDNcVFJydhHaTYv9Gw7Wg0yNuq2_mlJcDCW80aaF4nRy8YCjvQFAoBdDRva4uGv6xgJt6ikQTP-jk652KzZzTgtCliqqvCpA3qAGfLp_lT-lO-1Rg6P03_d8MghEA8OSvQqfVFPmxD7P_e1j3SRTZ29g3f7oF3VE-wue57Ayg"
                alt="Plato"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-2 rounded-xl overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuo4DlZB_et_lplefYWte09QTqjwZpu9P8vmHzqa6Lr1drz5MAYSffwhsfygileXxJYd2o3ll6TNEXtDteHB82mSqird-Mfdm3akWbKs0sXCpvQ4z28x56WJT1EPmPiryY2rqfh61-RBgr99kt7FC9_Imc2ptphcy5hZRpXrpRjQlQ18zKKt93hvZkac-wkPFq1E2aG6__ngr-FmiJoiRer1_5QhNU8E73WxhFUvGKe7aI6h5IL1zHwJ3ujQsv2D5AG67JxYRcbKM"
                alt="Equipo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-24 bg-primary text-white text-center">
        <h2 className="text-4xl mb-12 italic">Nuestros Valores</h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div>
            <h4 className="text-xl italic">Sostenibilidad</h4>
            <p className="text-sm opacity-80">
              Respetamos los ciclos de la tierra.
            </p>
          </div>

          <div>
            <h4 className="text-xl italic">Pasión</h4>
            <p className="text-sm opacity-80">
              Cocinamos con el alma.
            </p>
          </div>

          <div>
            <h4 className="text-xl italic">Calidad</h4>
            <p className="text-sm opacity-80">
              Solo lo mejor llega a tu mesa.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}