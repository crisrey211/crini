import { useState, useEffect } from "react";
import Google from "@icons/google.svg";
import MarqueeDemoVertical from "@/components/Marquee";
import MarqueeDemoHorizontal from "@/components/MarqueeHorizontal";

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
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4">¿Qué dicen nuestros clientes?</h2>
                        <p className="text-gray-600">
                            En Crinigo, la satisfacción de nuestros clientes es nuestra máxima
                            prioridad. Nos enorgullecemos de las relaciones que establecemos y de
                            los éxitos que ayudamos a crear.
                        </p>
                        <div className="flex items-center justify-center md:justify-start mt-4">
                            <span className="text-lg font-bold mr-2">5.0</span>
                            <Google />
                            <span className="text-yellow-500 text-lg font-bold ml-2">★★★★★</span>
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
