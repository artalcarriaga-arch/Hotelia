const rooms = [
  {
    name: "Suite del jardín",
    price: 220,
    guests: 2,
    description: "Espacio luminoso con terraza privada y desayuno incluido.",
    image: "/images/rooms/suite.jpg",
  },
  {
    name: "Habitación superior",
    price: 180,
    guests: 2,
    description: "Diseño cálido y elegante para estadías largas.",
    image: "/images/rooms/upper.jpg",
  },
  {
    name: "Loft de skyline",
    price: 260,
    guests: 3,
    description: "Vista panorámica y ambiente íntimo para escapadas.",
    image: "/images/rooms/loft.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-semibold tracking-tight">Hotelia</div>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#">Inicio</a>
          <a href="#">Habitaciones</a>
          <a href="#">Experiencias</a>
          <a href="#">Nosotros</a>
        </nav>

        <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white">
          Reservar
        </button>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted">
              Hotel boutique
            </p>
            <h1 className="max-w-xl text-5xl leading-none tracking-tight">
              Descansá en un lugar pensado para vivir bien.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted">
              Habitaciones elegantes, servicio pensado en cada detalle y una experiencia de hospedaje tranquila desde el primer minuto.
            </p>

            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm sm:flex-row">
              <div className="flex-1">
                <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted">
                  Llegada
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-border bg-background px-3 py-2"
                />
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted">
                  Salida
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-border bg-background px-3 py-2"
                />
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted">
                  Huéspedes
                </label>
                <select className="w-full rounded-xl border border-border bg-background px-3 py-2">
                  <option>2 huéspedes</option>
                  <option>3 huéspedes</option>
                  <option>4 huéspedes</option>
                </select>
              </div>
              <button className="rounded-xl bg-primary px-5 py-3 font-medium text-white">
                Buscar
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-white p-3 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                alt="Hotelia lobby"
                className="h-[560px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted">Habitaciones</p>
              <h2 className="mt-2 text-4xl">Elegidas para descansar mejor.</h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {rooms.map((room) => (
              <article key={room.name} className="overflow-hidden rounded-3xl border border-border bg-white">
                <img src={room.image} alt={room.name} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl">{room.name}</h3>
                    <span className="text-lg font-semibold text-primary">${room.price}</span>
                  </div>
                  <p className="mb-4 text-muted">{room.description}</p>
                  <div className="mb-5 text-sm text-muted">Hasta {room.guests} huéspedes</div>
                  <button className="rounded-full border border-border px-4 py-2 text-sm">
                    Ver habitación
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#f1efe9] py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
            {[
              ["Check-in sin filas", "Llegá y entrá en calma."],
              ["Ambiente tranquilo", "Silencio, descanso y confort."],
              ["Servicio atento", "Atención personalizada y cálida."],
              ["Ubicación premium", "Conectado con lo mejor de la ciudad."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-border bg-white p-6">
                <h3 className="mb-2 text-xl">{title}</h3>
                <p className="text-muted">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}