const rooms = [
  {
    name: "Suite del jardín",
    price: 220,
    guests: 2,
    description: "Espacio luminoso con terraza privada y desayuno incluido.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Habitación superior",
    price: 180,
    guests: 2,
    description: "Diseño cálido y elegante para estadías largas.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Loft de skyline",
    price: 260,
    guests: 3,
    description: "Vista panorámica y ambiente íntimo para escapadas.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
  },
];

const highlights = [
  ["Check-in sin filas", "Llegá y entrá en calma."],
  ["Ambiente tranquilo", "Silencio, descanso y confort."],
  ["Servicio atento", "Atención personalizada y cálida"],
  ["Ubicación premium", "Conectado con lo mejor de la ciudad."],
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-foreground">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-semibold tracking-tight">Hotelia</div>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#" className="transition-opacity hover:opacity-80">
            Inicio
          </a>
          <a href="#" className="transition-opacity hover:opacity-80">
            Habitaciones
          </a>
          <a href="#" className="transition-opacity hover:opacity-80">
            Experiencias
          </a>
          <a href="#" className="transition-opacity hover:opacity-80">
            Nosotros
          </a>
        </nav>

        <button
          type="button"
          className="rounded-full bg-[#27594b] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#204d40]">
          Reservar
        </button>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-6 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-[#d8d1c7] bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#5f6a63]">
              Hotel boutique
            </p>

            <div className="space-y-5">
              <h1 className="max-w-xl text-5xl leading-none tracking-tight text-[#1f2824] md:text-6x1">
              Descansá en un lugar pensado para vivir bien.
              </h1>
              
            <p className="max-w-lg text-lg leading-8 text-[#5f6a63]">
              Habitaciones elegantes, servicio pensado en cada detalle y una experiencia de hospedaje tranquila desde el primer minuto.
            </p>
          </div>

            <div className="mt-8 flex flex-col gap-4 rounded-[1.5rem] border border-[#e2ddd3] bg-white p-4 shadow-[0_12px_30px_rgba(31,40,36,0.04)] sm:flex-row">
              <div className="flex-1">
                <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#5f6a63]">
                  Llegada
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-[#dfe4df] bg-[#f7f4ee] px-3 py-2.5 text-sm text-[#1f2824] outline-none transition focus:border-[#27594b]"
                />
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#5f6a63]">
                  Salida
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-[#dfe4df] bg-[#f7f4ee] px-3 py-2.5 text-sm text-[#1f2824] outline-none transition focus:border-[#27594b]"
                />
              </div>

              <div className="flex-1">
                <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#5f6a63]">
                  Huéspedes
                </label>
                <select className="w-full rounded-xl border border-[#dfe4df] bg-[#f7f4ee] px-3 py-2.5 text-sm text-[#1f2824] outline-none transition focus:border-[#27594b]">
                  <option>2 huéspedes</option>
                  <option>3 huéspedes</option>
                  <option>4 huéspedes</option>
                </select>
              </div>

              <button
                type="button"
                className="rounded-xl bg-[#27594b] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#204d40]">
                Buscar
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-[#e9dfd2]" />
            <div className="overflow-hidden rounded-[2rem] border border-[#e2ddd3] bg-white p-3 shadow-[0_18px_45px_rgba(31,40,36,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                alt="Hotelia lobby"
                className="h-[560px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#5f6a63]">
                Habitaciones
              </p>
              <h2 className="mt-3 text-4xl text-[#1f2824]">
                Elegidas para descansar mejor.
              </h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {rooms.map((room) => (
              <article key={room.name} className="overflow-hidden rounded-[1.75rem] border border-[#e2ddd3] bg-white shadow-[0_12px_30px_rgba(31,40,36,0.04)]">
                <img src={room.image} alt={room.name} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="text-2xl text-[#1f2824]">{room.name}</h3>
                    <span className="text-lg font-semibold text-[#27594b]">${room.price}</span>
                  </div>

                  <p className="mb-4 leading-7 text-[#5f6a63]">{room.description}</p>
                  <div className="mb-5 text-sm text-[#5f6a63]">Hasta {room.guests} huéspedes</div>
                  <button className="rounded-full border border-[#dfe4df] px-4 py-2 text-sm text-[#1f2824] transition-colors hover:border-[#27594b] hover:text-[#27594b]">
                    Ver habitación
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#efe9e1] py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
            {highlights.map(([title, text]) => (
              <div
                key={title}
                className="rounded-[1.5rem] border border-[#e2ddd3] bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 text-xl text-[#1f2824]">{title}</h3>
                <p className="leading-7 text-[#5f6a63]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mx-auto flex max-w-7xl items-center justify-between border-t border-[#e2ddd3] px-6 py-8 text-sm text-[#5f6a63]">
          <div className="font-medium text-[#1f2824]">Hotelia</div>
          <div>Reservas • Experiencias • Contacto</div>
        </footer>
      </main>
    </div>
  );
}