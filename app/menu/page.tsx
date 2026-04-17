import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import Link from "next/link"

export const metadata = {
  title: "Menú | La Sazón de Nicolasa",
  description:
    "Descubre nuestro menú de cocina tradicional mexicana hecho con recetas de familia.",
}

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <PageHero
        eyebrow="Nuestro menú"
        title="Recetas que han cruzado generaciones"
        description="Entradas, platos fuertes, postres y bebidas preparados con ingredientes frescos y la pasión de siempre."
      />

      {/* HERO VISUAL CON PARALLAX SUTIL */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuARw3KbG2LvBIXpSNR_dVA7cWRgDJuitUKaix4_CPFHMi59DTvLzTIjCYBaj9XwDdvVt9zxsvoOvCVHBA2c9AjL-1eM3_-i-BTCGdbDe-4ILmU_DzVTgJW9M5BEXQIT7ru1jrIrQM7d6FepanvDDRfXlBbxB2DayezhrfFKW6g4DNq0LeR6Ab-Fa2Ld5vME1rzVA7b2gjvDWvprJfB4suJsTkH-m5kTrTfGkHbgBxcYnM3eaMX49JYwbJP7UaGO79gU_ZNOPGTuO-Dn"
            alt="Mesa tradicional y ambiente"
            className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif italic tracking-wide drop-shadow-lg">
            Sabor Auténtico
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 opacity-80" />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 space-y-32">

        {/* ENTRANTES - ESTILO ASIMÉTRICO */}
        <section id="entrantes" className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary block"></span>
              <span className="text-sm tracking-widest text-primary uppercase font-semibold">Para empezar</span>
            </div>
            <h2 className="text-5xl md:text-6xl italic text-foreground font-serif leading-tight">
              Entrantes de la Tierra
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pequeños bocados elaborados con ingredientes de pequeños productores locales para abrir el apetito y despertar el alma.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
            {/* ITEM 1 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl aspect-[4/3] mb-6 relative bg-muted shadow-md">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiTGnLlEAypgMGnK1HIGKUw86MLzgL71ujFJwfDugT6e3BlOrRefz6Cqy0hCVs4yL9MlRBCwvBShJ-Z4yAbuayMtkC5kTlPWZHXRbae1LlQo3LlbkVrpj_Gj_QnedHsR3SNC9wV4ai3eY55vAUjGJxktrm1vOwSCiwv8XnRGJ1irYTFlYz_EL3AmMCzKhuzSWUNHG8keOaIAVuALKu24PTRZkrrwidED9R1fAT7QQfRCysRCMHRM0xAysweltyID2a8gSKC8Qp1U2A"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Croquetas"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-2xl font-serif">Croquetas de la Abuela</h3>
                <span className="text-primary font-bold text-xl">14€</span>
              </div>
              <p className="text-muted-foreground font-light">Bechamel cremosa, jamón ibérico de bellota y un toque de nuez moscada.</p>
            </div>

            {/* ITEM 2 */}
            <div className="group cursor-pointer sm:mt-16">
              <div className="overflow-hidden rounded-2xl aspect-[4/3] mb-6 relative bg-muted shadow-md">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKfth2fhccK2cXWiacFy-Dmw75LmPkRbuZOACRDZY5HdKOJ7UHOOREdSXwv1iXBNwFTfKCFA7oYMCb9wm2EjVKCXcEAlYZvPI481fnuX0oZQ9AVN9wkixeKJG8Im7lx7hkjiuBgFrTtePscd8lRh9X262pfJAICey_sAmuYZ-XDHOwEoY06k7HO7-NKDlWkgxvdLjLYxGkUhosi-g50mI3sGgAIqwUSx7X2_EzIcUee_YsNKEE_TPvZ7W8gxswLs3aPjeIPWsG9KGG"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Alcachofas"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-2xl font-serif">Alcachofas a la Brasa</h3>
                <span className="text-primary font-bold text-xl">18€</span>
              </div>
              <p className="text-muted-foreground font-light">Confitadas en AOVE, terminadas a las brasas con sal de mar.</p>
            </div>
            
            {/* TEXT ITEMS WITHOUT IMAGE */}
            <div className="sm:col-span-2 pt-8 border-t border-border mt-4 border-dashed">
              <div className="flex items-baseline justify-between group">
                <h3 className="text-xl font-serif group-hover:text-primary transition-colors">Guacamole de la Casa con Totopos</h3>
                <div className="flex-1 border-b border-dotted border-border mx-4 opacity-40"></div>
                <span className="font-semibold text-lg">12€</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1 font-light">Aguacate triturado al momento, cilantro fresco, cebolla morada y limón.</p>
            </div>
          </div>
        </section>

        {/* PRINCIPALES - ESTILO GRID ELEGANTE */}
        <section id="principales" className="relative">
          <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="text-center md:max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-sm tracking-widest text-primary uppercase font-semibold">El corazón de nuestra cocina</span>
            <h2 className="text-5xl md:text-6xl text-foreground italic font-serif">
              Platos Principales
            </h2>
            <p className="text-muted-foreground text-lg">
              De las viejas recetas familiares directo a los fogones actuales. Cada plato respeta los tiempos lentos de la cocina casera.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Cordero Lechal",
                price: "32€",
                desc: "Asado lentamente en horno de leña por 12 horas, acompañado de puré rústico.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo90RVzpZIjiI9HbBvbYLLrYdsVuR7cBfBviyjoe25Q9IPsRuA39gHjoB2qIC5sRDbk-J8qRTdMcA2WT6MmvsAwIuE-kxKysAoEKi2hYnqOKyEE2F8sNI5H9IydYCk1BxizBAtXg7Rr0hb4DnCy0-EH2Hm7MBf6286kXWf4nmNHzOKHUSKCeXPDIBOnWC0bSaB3ZEJukhnL4prJKGt-3vl4UFYQya7zhDH_nK1awxNfRnLnL1jx_LKSuW6PbGNHPQRnuq_hKeukhZp"
              },
              {
                title: "Bacalao al Pil-Pil",
                price: "26€",
                desc: "Lomo de bacalao confitado a baja temperatura, ligado en su propia gelatina y oliva.",
                img: "/images/pozole.jpg" // Using an existing image conceptually
              },
              {
                title: "Arroz de Montaña",
                price: "24€",
                desc: "Arroz meloso con setas de temporada, costilla de cerdo y un fondo denso y oscuro.",
                img: "/images/tacos.jpg" // Conceptually
              }
            ].map((item, i) => (
              <div key={i} className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground px-4 py-1.5 rounded-full font-bold shadow-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light flex-grow">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* POSTRES Y BEBIDAS - LISTA CLÁSICA ELEGANTE */}
        <section className="grid md:grid-cols-2 gap-16 md:gap-24 pt-16 border-t border-border">
          {/* POSTRES */}
          <div>
            <h2 className="text-3xl font-serif italic mb-10 text-primary">Postres Caseros</h2>
            <div className="space-y-8">
              {[
                { name: "Flan de la Tía Rosa", desc: "Receta secreta de la casa con baño de caramelo oscuro y vainilla en vaina.", price: "8€" },
                { name: "Tarta de Queso Tostada", desc: "Textura fluida en el interior, con un toque de queso ahumado.", price: "9€" },
                { name: "Churros de Churrería", desc: "Acompañados de un espeso chocolate a la taza.", price: "7€" }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-medium tracking-wide group-hover:text-primary transition-colors">{item.name}</h3>
                    <div className="flex-1 border-b border-dotted border-border mx-4 opacity-50 relative top-[-6px]"></div>
                    <span className="font-semibold text-lg">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 font-light pr-12">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* BEBIDAS */}
          <div>
            <h2 className="text-3xl font-serif italic mb-10 text-primary">Nuestra Bodega</h2>
            <div className="space-y-8">
              {[
                { name: "Vino Tinto de la Casa", desc: "Copa de tempranillo seleccionado de pequeñas bodegas.", price: "5€ / 22€" },
                { name: "Aguas Frescas Artesanales", desc: "Jamaica, Horchata o Tamarindo natural, hechas en el día.", price: "4€" },
                { name: "Café de Olla", desc: "Café aromatizado con canela, piloncillo y anís estrella.", price: "3.50€" }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-medium tracking-wide group-hover:text-primary transition-colors">{item.name}</h3>
                    <div className="flex-1 border-b border-dotted border-border mx-4 opacity-50 relative top-[-6px]"></div>
                    <span className="font-semibold text-lg">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 font-light pr-12">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION MEJORADO */}
        <section className="relative px-6 py-20 bg-primary text-primary-foreground rounded-[2.5rem] overflow-hidden text-center shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif italic drop-shadow-sm">
              Tu mesa te espera
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light leading-relaxed">
              Disfruta de una experiencia gastronómica que recordarás por mucho tiempo.
            </p>
            <Link 
              href="/contacto" 
              className="inline-block mt-4 bg-background text-foreground hover:bg-background/90 px-10 py-5 rounded-full font-bold tracking-wider uppercase text-sm transition-transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Reservar Mesa Ahora
            </Link>
          </div>
        </section>

      </div>

      <SiteFooter />
    </main>
  )
}