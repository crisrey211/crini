interface Offer {
    id: number;
    title: string;
    description: string;
    image: string;
    discount: string;
    duration?: string,
    dates?: string,
    type: number,
    details: string[];
    price: {
        original: string;
        current: string;
    };
    priceNote?: string;
    images: string[];
    fullDescription: string;
    included: string[];
}

export const offers: Offer[] = [

    {
        id: 1,
        title: "Cumpleaños para mimarse con un tratamiento de belleza",
        description:
            "Visita el Balneario de Archena y tómate ese respiro que tanto necesitas. Desde Smartbox queremos invitarte...",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
        discount: "10% de descuento",
        details: ["Acceso al circuito termal Balnea (2h)", "Para 2 personas"],
        price: {
            original: "80.00€",
            current: "59.90€",
        },
        images: [
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
            "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
        ],
        fullDescription: "Visita el Balneario de Archena y tómate ese respiro que tanto necesitas...",
        included: ["Acceso al circuito termal Balnea (2h)", "Para 2 personas", "Tratamientos de belleza incluidos"],
        type: 1,
    },
    {
        id: 2,
        title: "Circuito Atenas y circuito Delfos",
        description:
            "Explora Atenas, visita Delfos y su Oráculo, y maravillate en Kalambaka. ¡Prepara tu maleta y vive la magia!",
        image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=800",
        discount: "50% de descuento",
        duration: "4 día/s, 3 noche/s",
        dates: "Enero - Marzo 2025",
        details: ["4 día/s, 3 noche/s", "Enero - Marzo 2025"],
        price: {
            original: "450€",
            current: "500€",
        },
        priceNote: "Precio por persona",
        images: [
            "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=800",
            "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=800",
            "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=800",
        ],
        fullDescription:
            "Explora Atenas, visita Delfos y su Oráculo, y maravillate en Kalambaka. ¡Prepara tu maleta y vive la magia!",
        included: ["Vuelos de ida y vuelta", "Alojamiento en hotel de 4 estrellas", "Visitas guiadas a Atenas y Delfos"],
        type: 8,
    },
    {
        id: 3,
        title: "Circuito Atenas y circuito Delfos",
        description:
            "Explora Atenas, visita Delfos y su Oráculo, y maravillate en Kalambaka. ¡Prepara tu maleta y vive la magia!",
        image: "https://images.unsplash.com/photo-1545394734-b4140a0fec2b?w=800",
        discount: "50% de descuento",
        duration: "4 día/s, 3 noche/s",
        dates: "Enero - Marzo 2025",
        details: ["4 día/s, 3 noche/s", "Enero - Marzo 2025"],
        price: {
            original: "450€",
            current: "500€",
        },
        priceNote: "Precio por persona",
        images: [
            "https://images.unsplash.com/photo-1545394734-b4140a0fec2b?w=800",
            "https://images.unsplash.com/photo-1545394734-b4140a0fec2b?w=800",
            "https://images.unsplash.com/photo-1545394734-b4140a0fec2b?w=800",
        ],
        fullDescription:
            "Explora Atenas, visita Delfos y su Oráculo, y maravillate en Kalambaka. ¡Prepara tu maleta y vive la magia!",
        included: ["Vuelos de ida y vuelta", "Alojamiento en hotel de 4 estrellas", "Visitas guiadas a Atenas y Delfos"],
        type: 8,
    },
    {
        id: 4,
        title: "Escapada Romántica a París",
        description: "Disfruta de una escapada romántica a París con tu pareja. Incluye vuelos, hotel y actividades.",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800",
        discount: "20% de descuento",
        price: {
            original: "1200€",
            current: "960€",
        },
        details: [],
        images: [
            "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800",
            "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800",
            "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800",
        ],
        fullDescription: "Disfruta de una escapada romántica a París con tu pareja. Incluye vuelos, hotel y actividades.",
        included: ["Vuelos de ida y vuelta", "Alojamiento en hotel de 4 estrellas", "Cena romántica para dos"],
        type: 8,
    },
    {
        id: 5,
        title: "Aventura en la Selva Amazónica",
        description: "Vive una aventura inolvidable en la selva amazónica. Incluye alojamiento en eco-lodge y actividades.",
        image: "https://images.unsplash.com/photo-1506174369126-1d66d63b1fab?w=800",
        discount: "15% de descuento",
        price: {
            original: "1500€",
            current: "1275€",
        },
        details: [],
        images: [
            "https://images.unsplash.com/photo-1506174369126-1d66d63b1fab?w=800",
            "https://images.unsplash.com/photo-1506174369126-1d66d63b1fab?w=800",
            "https://images.unsplash.com/photo-1506174369126-1d66d63b1fab?w=800",
        ],
        fullDescription:
            "Vive una aventura inolvidable en la selva amazónica. Incluye alojamiento en eco-lodge y actividades.",
        included: ["Alojamiento en eco-lodge", "Visitas guiadas a la selva", "Actividades de aventura"],
        type: 6,
    },
    {
        id: 6,
        title: "Safari en África",
        description: "Experimenta un safari inolvidable en África. Incluye alojamiento en un lodge de lujo y actividades.",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800",
        discount: "25% de descuento",
        price: {
            original: "2000€",
            current: "1500€",
        },
        details: [],
        images: [
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800",
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800",
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800",
        ],
        fullDescription:
            "Experimenta un safari inolvidable en África. Incluye alojamiento en un lodge de lujo y actividades.",
        included: ["Alojamiento en lodge de lujo", "Safaris guiados", "Actividades de observación de animales"],
        type: 7,
    },
    {
        id: 7,
        title: "Crucero por el Mediterráneo",
        description: "Disfruta de un crucero por el Mediterráneo. Incluye alojamiento en camarote y actividades.",
        image: "https://images.unsplash.com/photo-1556740749-80a8701c656e?w=800",
        discount: "10% de descuento",
        price: {
            original: "800€",
            current: "720€",
        },
        details: [],
        images: [
            "https://images.unsplash.com/photo-1556740749-80a8701c656e?w=800",
            "https://images.unsplash.com/photo-1556740749-80a8701c656e?w=800",
            "https://images.unsplash.com/photo-1556740749-80a8701c656e?w=800",
        ],
        fullDescription: "Disfruta de un crucero por el Mediterráneo. Incluye alojamiento en camarote y actividades.",
        included: ["Alojamiento en camarote", "Comida y bebida incluidas", "Actividades a bordo"],
        type: 6,
    },
    {
        id: 8,
        title: "Escapada a la playa",
        description: "Relájate en una escapada a la playa. Incluye alojamiento en hotel y actividades.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
        discount: "5% de descuento",
        price: {
            original: "500€",
            current: "475€",
        },
        details: [],
        images: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
        ],
        fullDescription: "Relájate en una escapada a la playa. Incluye alojamiento en hotel y actividades.",
        included: ["Alojamiento en hotel", "Acceso a la playa", "Actividades acuáticas"],
        type: 6,
    },
    {
        id: 9,
        title: "Visita a Nueva York",
        description: "Visita la ciudad de Nueva York. Incluye vuelos, hotel y actividades.",
        image: "https://images.unsplash.com/photo-1494526589162-22e290a2327f?w=800",
        discount: "10% de descuento",
        price: {
            original: "1000€",
            current: "900€",
        },
        details: [],
        images: [
            "https://images.unsplash.com/photo-1494526589162-22e290a2327f?w=800",
            "https://images.unsplash.com/photo-1494526589162-22e290a2327f?w=800",
            "https://images.unsplash.com/photo-1494526589162-22e290a2327f?w=800",
        ],
        fullDescription: "Visita la ciudad de Nueva York. Incluye vuelos, hotel y actividades.",
        included: ["Vuelos de ida y vuelta", "Alojamiento en hotel", "Visitas guiadas"],
        type: 8,
    },
    {
        id: 10,
        title: "Escapada a la montaña",
        description: "Disfruta de una escapada a la montaña. Incluye alojamiento en cabaña y actividades.",
        image: "https://images.unsplash.com/photo-1508873127266-20772b29105c?w=800",
        discount: "15% de descuento",
        price: {
            original: "600€",
            current: "510€",
        },
        details: [],
        images: [
            "https://images.unsplash.com/photo-1508873127266-20772b29105c?w=800",
            "https://images.unsplash.com/photo-1508873127266-20772b29105c?w=800",
            "https://images.unsplash.com/photo-1508873127266-20772b29105c?w=800",
        ],
        fullDescription: "Disfruta de una escapada a la montaña. Incluye alojamiento en cabaña y actividades.",
        included: ["Alojamiento en cabaña", "Actividades al aire libre", "Comida y bebida incluidas"],
        type: 7,
    },
    {
        id: 11,
        title: "Visita a Roma",
        description: "Visita la ciudad de Roma. Incluye vuelos, hotel y actividades.",
        image: "https://images.unsplash.com/photo-1515542622-0a6290a22627?w=800",
        discount: "20% de descuento",
        price: {
            original: "700€",
            current: "560€",
        },
        details: [],
        images: [
            "https://images.unsplash.com/photo-1515542622-0a6290a22627?w=800",
            "https://images.unsplash.com/photo-1515542622-0a6290a22627?w=800",
            "https://images.unsplash.com/photo-1515542622-0a6290a22627?w=800",
        ],
        fullDescription: "Visita la ciudad de Roma. Incluye vuelos, hotel y actividades.",
        included: ["Vuelos de ida y vuelta", "Alojamiento en hotel", "Visitas guiadas"],
        type: 8,
    },
    {
        id: 12,
        title: "Escapada a la nieve",
        description: "Disfruta de una escapada a la nieve. Incluye alojamiento en hotel y actividades.",
        image: "https://images.unsplash.com/photo-1550873718-8890a7a6535c?w=800",
        discount: "5% de descuento",
        price: {
            original: "400€",
            current: "380€",
        },
        details: [],
        images: [
            "https://images.unsplash.com/photo-1550873718-8890a7a6535c?w=800",
            "https://images.unsplash.com/photo-1550873718-8890a7a6535c?w=800",
            "https://images.unsplash.com/photo-1550873718-8890a7a6535c?w=800",
        ],
        fullDescription: "Disfruta de una escapada a la nieve. Incluye alojamiento en hotel y actividades.",
        included: ["Alojamiento en hotel", "Acceso a pistas de esquí", "Actividades de nieve"],
        type: 7,
    },
]