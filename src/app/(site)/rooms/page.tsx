const rooms = [
    {
    id: "suite-del-jardin",
    name: "Suite del jardín",
    price: 200,
    guests: 2,
    rating: 4.9,
    type: "Suite",
    image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description: "Espacio luminosos con terraza privada y desayuno incluido.",
    available: true,
    },
    {
    id: "habitacion-superior",
    name: "Habitación superior",
    price: 180,
    guests: 2,
    rating: 4.8,
    type: "Habitación",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    description: "Diseño cálido y elegante para estadías largas.",
    available: true,
  },
  {
    id: "loft-de-skyline",
    name: "Loft de skyline",
    price: 260,
    guests: 3,
    rating: 5.0,
    type: "Loft",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    description: "Vista panorámica y ambiente íntimo para escapadas.",
    available: false,
  },
  {
    id: "junior-deluxe",
    name: "Junior Deluxe",
    price: 210,
    guests: 2,
    rating: 4.7,
    type: "Habitación",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
    description: "Diseño contemporáneo con una zona de estar muy confortable.",
    available: true,
  },
];

export default function RoomsPage() {
    return (
        <div className="min-h-screen bg-[#f7f4ee] text-[#1f2824]">
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#5f6a63]">
            Habitaciones
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl">Elegí tu espacio ideal.</h1>
        </div>

        <section className="mb-10 rounded-[1.75rem] border border-[#e2ddd3] bg-white p-4 shadow-[0_12px_30px_rgba(31,40,36,0.04)]">
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#5f6a63]">
                Tipo
              </label>
              <select className="w-full rounded-xl border border-[#dfe4df] bg-[#f7f4ee] px-3 py-2.5 text-sm">
                <option>Todos</option>
                <option>Suite</option>
                <option>Habitación</option>
                <option>Loft</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#5f6a63]">
                Huéspedes
              </label>
              <select className="w-full rounded-xl border border-[#dfe4df] bg-[#f7f4ee] px-3 py-2.5 text-sm">
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#5f6a63]">
                Precio
              </label>
              <select className="w-full rounded-xl border border-[#dfe4df] bg-[#f7f4ee] px-3 py-2.5 text-sm">
                <option>Cualquier precio</option>
                <option>Hasta $200</option>
                <option>$200 - $250</option>
                <option>$250+</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#5f6a63]">
                Disponibilidad
              </label>
              <select className="w-full rounded-xl border border-[#dfe4df] bg-[#f7f4ee] px-3 py-2.5 text-sm">
                <option>Disponible</option>
                <option>Próximamente</option>
              </select>
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room) => (
            <article
              key={room.id}
              className="overflow-hidden rounded-[1.75rem] border border-[#e2ddd3] bg-white shadow-[0_12px_30px_rgba(31,40,36,0.04)]"
            >
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-72 w-full object-cover"
                />
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${
                    room.available
                      ? "bg-[#eaf5f1] text-[#27594b]"
                      : "bg-[#f5e8e4] text-[#9a4a3b]"
                  }`}
                >
                  {room.available ? "Disponible" : "No disponible"}
                </span>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#5f6a63]">
                      {room.type}
                    </p>
                    <h2 className="mt-2 text-2xl">{room.name}</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-[#27594b]">
                      ${room.price}
                    </p>
                    <p className="text-xs text-[#5f6a63]">por noche</p>
                  </div>
                </div>

                <div className="mb-4 flex items-center gap-2 text-sm text-[#5f6a63]">
                  <span>★ {room.rating}</span>
                  <span>•</span>
                  <span>Hasta {room.guests} huéspedes</span>
                </div>

                <p className="mb-5 leading-7 text-[#5f6a63]">{room.description}</p>

                <button
                  type="button"
                  className="w-full rounded-full bg-[#27594b] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#204d40]"
                >
                  Ver habitación
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}