export type Room = {
    id: string;
    name: string;
    price: number;
    guests: number;
    rating: number;
    type: "Suite" | "Habitación" | "Loft";
    image: string;
    description: string;
    available: boolean;
};

export const mockRooms: Room[] = [
  {
    id: "suite-del-jardin",
    name: "Suite del jardín",
    price: 220,
    guests: 2,
    rating: 4.9,
    type: "Suite",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description: "Espacio luminoso con terraza privada y desayuno incluido.",
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
];