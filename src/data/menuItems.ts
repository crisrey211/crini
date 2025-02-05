import Beach from '@/icons/Beach';
import Zap from '@/icons/Zap';

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
    icon?: React.FC<React.SVGProps<SVGSVGElement>>; // Icono opcional (componente SVG)
    submenu?: Submenu;
}

export const menuItems: MenuItem[] = [
    {
        title: "Planes",
        href: "/ofertas",
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
        icon: Zap
    },
    {
        title: "Programa de afiliados",
        href: "/afiliados",
        icon: Beach
    },
    {
        title: "Quiénes somos",
        href: "/nosotros",
    },
    {
        title: "Contáctanos",
        href: "/contacto",
    },
];
