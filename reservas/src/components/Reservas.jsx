export default function Reservas() {
  return (
    <div className="min-h-screen bg-[#fcf9f4] text-[#1c1c19] font-body">
      <header className="fixed top-0 w-full z-50 bg-[#fcf9f4]/70 backdrop-blur-md">
        <div className="flex justify-between items-center px-6 py-4">
          <button className="text-[#86452b] hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="text-xl font-headline font-bold text-[#86452b] tracking-tight">
            Heritage Editorial
          </h1>
          <button className="text-[#86452b] hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </header>

      <main className="pt-20 pb-32 min-h-screen">
        <section className="relative h-[353px] md:h-[442px] overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn5U2trEqtOtxpT8ArNlFi2iqHpwzElLajifJCB6r8X2nwFDV20A-0uakwlZSwbhKQCWjgWnPLZXXhBxGS1Q7qEfedwxRoSHaPNsL5iPlCyzYzBaEP34JTFUJCcgFs8N_M0FrPqdzF9cDztyXLWTnSGoXGfW0hEtQxbFVBvKLs0WEP3i4Shvabpu6HelTpPJEeONo3Jb-qgJDZpJIoRXHTMGdPJjndwdENVZtXpnSJOqqwnGrrtOmqz5BctUYzJtbX-y1HvTsl9tD2"
            alt="Heritage ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcf9f4] to-transparent" />
        </section>

        <section className="container mx-auto px-6 -mt-32 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 items-start">
              <div className="md:col-span-5 mb-8 md:mb-0">
                <span className="font-label text-[#775a19] text-[10px] uppercase label-rhythm font-bold mb-4 block">
                  La Sazón de Nicolasa
                </span>
                <h2 className="font-headline text-5xl md:text-6xl text-[#1c1c19] mb-6 text-editorial font-bold">
                  Reservas
                </h2>
                <p className="text-[#53433d] text-lg leading-relaxed font-light">
                  Ven a disfrutar de los sabores más auténticos de nuestra tierra. Reserva tu mesa y vive una experiencia inolvidable en familia.
                </p>
                <div className="mt-12 hidden md:block">
                  <div className="p-6 bg-[#f6f3ee] rounded-xl border border-[#d9c2ba]/15">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="material-symbols-outlined text-[#86452b]">restaurant</span>
                      <span className="font-medium">Cocina Ancestral</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-[#86452b]">family_restroom</span>
                      <span className="font-medium">Ambiente Familiar</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="bg-[#ffffff] p-8 md:p-12 rounded-xl shadow-2xl shadow-[#1c1c19]/5">
                  <form action="#" className="space-y-8">
                    <div className="group">
                      <label className="font-label text-[10px] uppercase label-rhythm font-bold text-[#53433d] group-focus-within:text-[#775a19] transition-colors block mb-2" htmlFor="nombre">
                        Nombre completo
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Ingresa tu nombre"
                        className="w-full bg-transparent border-0 border-b border-[#d9c2ba] focus:border-[#775a19] focus:ring-0 px-0 py-3 text-lg font-body placeholder:text-[#53433d]/30 transition-all"
                      />
                    </div>
                    <div className="group">
                      <label className="font-label text-[10px] uppercase label-rhythm font-bold text-[#53433d] group-focus-within:text-[#775a19] transition-colors block mb-2" htmlFor="telefono">
                        Número de teléfono
                      </label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        placeholder="+51 900 000 000"
                        className="w-full bg-transparent border-0 border-b border-[#d9c2ba] focus:border-[#775a19] focus:ring-0 px-0 py-3 text-lg font-body placeholder:text-[#53433d]/30 transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="font-label text-[10px] uppercase label-rhythm font-bold text-[#53433d] group-focus-within:text-[#775a19] transition-colors block mb-2" htmlFor="fecha">
                          Fecha de reserva
                        </label>
                        <div className="relative">
                          <input
                            id="fecha"
                            name="fecha"
                            type="date"
                            className="w-full bg-transparent border-0 border-b border-[#d9c2ba] focus:border-[#775a19] focus:ring-0 px-0 py-3 text-lg font-body transition-all appearance-none"
                          />
                          <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-[#53433d] pointer-events-none">
                            calendar_today
                          </span>
                        </div>
                      </div>
                      <div className="group">
                        <label className="font-label text-[10px] uppercase label-rhythm font-bold text-[#53433d] group-focus-within:text-[#775a19] transition-colors block mb-2" htmlFor="hora">
                          Hora de reserva
                        </label>
                        <div className="relative">
                          <input
                            id="hora"
                            name="hora"
                            type="time"
                            className="w-full bg-transparent border-0 border-b border-[#d9c2ba] focus:border-[#775a19] focus:ring-0 px-0 py-3 text-lg font-body transition-all appearance-none"
                          />
                          <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-[#53433d] pointer-events-none">
                            schedule
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label className="font-label text-[10px] uppercase label-rhythm font-bold text-[#53433d] group-focus-within:text-[#775a19] transition-colors block mb-2" htmlFor="personas">
                        Número de personas
                      </label>
                      <div className="relative">
                        <select
                          id="personas"
                          name="personas"
                          className="w-full bg-transparent border-0 border-b border-[#d9c2ba] focus:border-[#775a19] focus:ring-0 px-0 py-3 text-lg font-body transition-all appearance-none pr-8"
                        >
                          <option value="1">1 persona</option>
                          <option value="2">2 personas</option>
                          <option value="3">3 personas</option>
                          <option value="4">4 personas</option>
                          <option value="5">5 personas</option>
                          <option value="6+">Más de 6 personas</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-[#53433d] pointer-events-none">
                          expand_more
                        </span>
                      </div>
                    </div>
                    <div className="pt-6">
                      <button
                        type="submit"
                        className="w-full py-4 px-8 bg-gradient-to-br from-[#86452b] to-[#a45d41] text-[#ffffff] font-label font-bold uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-[#86452b]/20"
                      >
                        Reservar ahora
                      </button>
                      <p className="text-center text-xs text-[#53433d] mt-4 font-light italic">
                        Confirmación instantánea sujeta a disponibilidad.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 overflow-hidden opacity-10 pointer-events-none select-none">
          <div className="flex gap-12 whitespace-nowrap">
            <span className="font-headline text-8xl text-[#86736c] italic">
              La Sazón de Nicolasa — Herencia — Sabor — Familia —
            </span>
            <span className="font-headline text-8xl text-[#86736c] italic">
              La Sazón de Nicolasa — Herencia — Sabor — Familia —
            </span>
          </div>
        </section>
      </main>

      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-[#fcf9f4] rounded-t-3xl border-t border-[#d9c2ba]/15 shadow-2xl shadow-[#1c1c19]/5">
        <div className="flex justify-around items-center h-20 px-4 pb-2">
          <a className="flex flex-col items-center justify-center text-[#1c1c19]/60 hover:text-[#86452b] transition-transform scale-98" href="#">
            <span className="material-symbols-outlined">home</span>
            <span className="font-label text-[10px] uppercase tracking-widest mt-1">Inicio</span>
          </a>
          <a className="flex flex-col items-center justify-center text-[#1c1c19]/60 hover:text-[#86452b] transition-transform scale-98" href="#">
            <span className="material-symbols-outlined">restaurant_menu</span>
            <span className="font-label text-[10px] uppercase tracking-widest mt-1">Menú</span>
          </a>
          <a className="flex flex-col items-center justify-center bg-[#86452b] text-[#fcf9f4] rounded-xl px-4 py-1 transition-transform scale-98" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              event_seat
            </span>
            <span className="font-label text-[10px] uppercase tracking-widest mt-1">Reservar</span>
          </a>
          <a className="flex flex-col items-center justify-center text-[#1c1c19]/60 hover:text-[#86452b] transition-transform scale-98" href="#">
            <span className="material-symbols-outlined">contact_page</span>
            <span className="font-label text-[10px] uppercase tracking-widest mt-1">Contacto</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
