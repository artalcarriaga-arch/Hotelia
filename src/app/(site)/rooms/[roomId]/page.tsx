import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockRooms } from "@/data/rooms";

type Props = {
  params: Promise<{ roomId: string }>;
};

export default async function RoomDetailPage({ params }: Props) {
  const { roomId } = await params;
  const room = mockRooms.find((item) => item.id === roomId);

  if (!room) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f2824]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href="/rooms"
          className="mb-6 inline-flex items-center text-sm font-medium text-[#27594b] hover:underline"
        >
          ← Volver a habitaciones
        </Link>

        <div className="grid gap-8 rounded-[2rem] border border-[#e2ddd3] bg-white p-6 shadow-[0_12px_30px_rgba(31,40,36,0.04)] md:grid-cols-2">
          <div className="overflow-hidden rounded-[1.5rem]">
            <Image
              src={room.image}
              alt={room.name}
              width={1200}
              height={900}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#5f6a63]">
              {room.type}
            </p>

            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
              {room.name}
            </h1>

            <div className="mt-4 flex items-center gap-4 text-sm text-[#5f6a63]">
              <span>★ {room.rating}</span>
              <span>•</span>
              <span>Hasta {room.guests} huéspedes</span>
            </div>

            <div className="mt-6 flex items-end gap-3">
              <span className="text-3xl font-semibold text-[#27594b]">
                ${room.price}
              </span>
              <span className="pb-1 text-sm text-[#5f6a63]">por noche</span>
            </div>

            <p className="mt-6 leading-7 text-[#5f6a63]">{room.description}</p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between rounded-2xl border border-[#e2ddd3] bg-[#f9f6f2] px-4 py-3">
                <span className="text-sm text-[#5f6a63]">Disponibilidad</span>
                <span
                  className={`text-sm font-medium ${
                    room.available ? "text-[#27594b]" : "text-[#9a4a3b]"
                  }`}
                >
                  {room.available ? "Disponible" : "No disponible"}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-[#e2ddd3] bg-[#f9f6f2] px-4 py-3">
                <span className="text-sm text-[#5f6a63]">Incluye</span>
                <span className="text-sm font-medium text-[#1f2824]">
                  Desayuno + Wi-Fi
                </span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Link
                href={`/booking/${room.id}`}
                className="flex-1 rounded-full bg-[#27594b] px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-[#204d40]"
              >
                Reservar ahora
              </Link>

              <Link
                href="/rooms"
                className="flex-1 rounded-full border border-[#d7d0c6] bg-white px-5 py-3 text-center text-sm font-medium text-[#1f2824] transition hover:bg-[#f5f1eb]"
              >
                Ver más rooms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}