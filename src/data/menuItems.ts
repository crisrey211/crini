import { ReactNode } from 'react';

interface SubmenuItem {
    title: string;
    description: string;
    href: string;
}

interface Submenu {
    image: {
        src: string;
        alt: string;
    };
    items: SubmenuItem[];
}

interface MenuItem {
    title: string;
    href: string;
    icon?: ReactNode;
    submenu?: Submenu;
}

export const menuItems: MenuItem[] = [
    {
        title: "Planes",
        href: "/latest-offers",
        submenu: {
            image: {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eWpPXFGW8GGAiln5cb1apVG5oqYm86.png",
                alt: "Ciringo Logo",
            },
            items: [
                {
                    title: "Paquetes vacacionales",
                    description:
                        "Disfruta de viajes diseñados para ti, con todo incluido para que solo te preocupes por relajarte y disfrutar.",
                    href: "/paquetes",
                },
                {
                    title: "Cajas de smartbox",
                    description:
                        "El regalo perfecto: experiencias únicas, desde escapadas románticas hasta actividades de aventura.",
                    href: "/smartbox",
                },
                {
                    title: "Vuelos",
                    description:
                        "Reserva tus vuelos con las mejores tarifas y opciones flexibles para cualquier destino del mundo.",
                    href: "/vuelos",
                },
                {
                    title: "Vuelos + Hoteles",
                    description:
                        "Ahorra tiempo y dinero con nuestras combinaciones de vuelos y hoteles adaptadas a tus necesidades.",
                    href: "/vuelos-hoteles",
                },
            ],
        },
    },
    {
        title: "Financiación",
        href: "/financiacion",
    },
    {
        title: "Programa de afiliados",
        href: "/afiliados",
    },
    {
        title: "Quiénes somos",
        href: "/about",
    },
    {
        title: "Contáctanos",
        href: "/contacto",
    },
];
