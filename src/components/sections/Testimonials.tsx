import { useState, useEffect } from "react";
import Google from "@icons/google.svg";
import MarqueeDemoVertical from "@/components/Marquee";
import MarqueeDemoHorizontal from "@/components/MarqueeHorizontal";
import { Star } from "lucide-react";

export default function Testimonials() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768); // Cambia a horizontal si es tablet o móvil
        };

        checkScreenSize(); // Verifica el tamaño al montar el componente
        window.addEventListener("resize", checkScreenSize); // Escucha cambios de tamaño

        return () => window.removeEventListener("resize", checkScreenSize); // Limpia el evento
    }, []);

    return (
        <section className="py-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left space-y-6">
                        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 lg:w-2/3">¿Qué dicen nuestros clientes?</h1>
                        <p className="text-gray-600 lg:w-3/4">
                            En Crinigo, la satisfacción de nuestros clientes es nuestra máxima
                            prioridad. Nos enorgullecemos de las relaciones que establecemos y de
                            los éxitos que ayudamos a crear.
                        </p>
                        <div className="flex flex-col justify-start items-center gap-2 md:justify-start mt-4 lg:items-start">
                            <span className="text-lg font-bold mr-2">5.0 de 100 reseñas</span>
                            <div className="flex items-center">
                                <Google />
                                <span className="flex text-yellow-500 ml-2">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Star fill="#FFB904" size={16} key={index} />
                                    ))}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 mt-8 md:mt-0 w-full max-w-full overflow-hidden">
                        {isMobile ? <MarqueeDemoHorizontal /> : <MarqueeDemoVertical />}
                    </div>
                </div>
            </div>
        </section>
    );
}
