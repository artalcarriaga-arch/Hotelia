import Image from "next/image";
import Link from "next/link";
import { mockRooms } from "@/data/rooms";
type RoomsPageProps = {
  searchParams: Promise<{
    type?: string;
    guests?: string;
    price?: string;
  }>;
};

export default async function RoomsPage({ searchParams }: RoomsPageProps) {
  const params = await searchParams;
  const selectedType = params.type ?? "all";
  const selectedGuests = Number(params.guests ?? 0);
  const selectedPrice = params.price ?? "all";

  const filteredRooms = mockRooms.filter((room) => {
    const matchesType = selectedType === "all" || room.type === selectedType;
    const matchesGuests =
      !Number.isFinite(selectedGuests) ||
      selectedGuests === 0 ||
      room.guests >= selectedGuests;
    
    const matchesPrice =
      selectedPrice === "under-200"
        ? room.price <= 200
        : selectedPrice === "200-250"
          ? room.price >= 200 && room.price <= 250
          : selectedPrice === "over-250"
            ? room.price > 250
            : true;
    
    return matchesType && matchesGuests && matchesPrice;
  });
    
  return (
        <div className="min-h-screen bg-[#f7f4ee] text-[#1f2824]">
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#5f6a63]">
            Habitaciones
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl">Elegí tu espacio ideal.</h1>
        </div>

        <form
  action="/rooms"
  method="get"
  className="mb-10 rounded-[1.75rem] border border-[#e2ddd3] bg-white p-4 shadow-[0_12px_30px_rgba(31,40,36,0.04)]"
>
  <div className="grid gap-4 md:grid-cols-4">
    <div>
      <label
        htmlFor="type"
        className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#5f6a63]"
      >
        Tipo
      </label>
      <select
        id="type"
        name="type"
        defaultValue={selectedType}
        className="w-full rounded-xl border border-[#dfe4df] bg-[#f7f4ee] px-3 py-2.5 text-sm"
      >
        <option value="all">Todos</option>
        <option value="Suite">Suite</option>
        <option value="Habitación">Habitación</option>
        <option value="Loft">Loft</option>
      </select>
    </div>

    <div>
      <label
        htmlFor="guests"
        className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#5f6a63]"
      >
        Huéspedes
      </label>
      <select
        id="guests"
        name="guests"
        defaultValue={String(selectedGuests)}
        className="w-full rounded-xl border border-[#dfe4df] bg-[#f7f4ee] px-3 py-2.5 text-sm"
      >
        <option value="0">Cualquiera</option>
        <option value="2">2 o más</option>
        <option value="3">3 o más</option>
      </select>
    </div>

    <div>
      <label
        htmlFor="price"
        className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#5f6a63]"
      >
        Precio por noche
      </label>
      <select
        id="price"
        name="price"
        defaultValue={selectedPrice}
        className="w-full rounded-xl border border-[#dfe4df] bg-[#f7f4ee] px-3 py-2.5 text-sm"
      >
        <option value="all">Cualquier precio</option>
        <option value="under-200">Hasta $200</option>
        <option value="200-250">$200–$250</option>
        <option value="over-250">Más de $250</option>
      </select>
    </div>

    <div className="flex flex-wrap items-end gap-3">
      <button
        type="submit"
        className="min-h-11 rounded-xl bg-[#27594b] px-5 py-3 text-sm font-medium text-white hover:bg-[#204d40]"
      >
        Aplicar filtros
      </button>
      <Link
        href="/rooms"
        className="inline-flex min-h-11 items-center text-sm font-medium text-[#27594b] underline"
      >
        Limpiar filtros
      </Link>
    </div>
  </div>
</form>

        {filteredRooms.length === 0 ? (
  <section className="rounded-2xl border border-[#e2ddd3] bg-white p-8 text-center">
    <h2 className="text-xl text-[#1f2824]">
      No encontramos habitaciones
    </h2>
    <p className="mt-2 text-sm text-[#5f6a63]">
      Probá cambiando o limpiando los filtros.
    </p>
    <Link
      href="/rooms"
      className="mt-4 inline-block text-sm font-medium text-[#27594b] underline"
    >
      Limpiar filtros
    </Link>
  </section>
) : (
  <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
    {filteredRooms.map((room) => (
      <article
        key={room.id}
        className="overflow-hidden rounded-[1.75rem] border border-[#e2ddd3] bg-white shadow-[0_12px_30px_rgba(31,40,36,0.04)]"
      >
        <div className="relative">
          <Image
            src={room.image}
            alt={room.name}
            width={1200}
            height={800}
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

          <p className="mb-5 leading-7 text-[#5f6a63]">
            {room.description}
          </p>

          <Link
            href={`/rooms/${room.id}`}
            className="block w-full rounded-full bg-[#27594b] px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#204d40]"
          >
            Ver habitación
          </Link>
        </div>
      </article>
    ))}
  </section>
)}
      </main>
    </div>
  );
}