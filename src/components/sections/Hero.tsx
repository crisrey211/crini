interface HeroProps {
    title?: string;  // Ahora opcional
    subtitle?: string;
    hideContent?: boolean; // Nueva prop
    children?: React.ReactNode; // Permite insertar otro contenido
}

export default function Hero({ title, subtitle, hideContent, children }: HeroProps) {
    return (
        <div className="relative w-full h-screen bg-cover bg-center bg-[url('/peru.jpg')]">
            <div className="flex items-center justify-center h-full text-center text-white px-6">
                <div className=" gap-3 lg:w-1/2">
                    {!hideContent ? (
                        <>
                            <h1 className="text-4xl-bold md:text-6xl-bold">{title}</h1>
                            {subtitle && <p className="mt-4 text-xl-medium">{subtitle}</p>}
                            <button className="mt-6 bg-white text-brand-900 px-6 py-3 rounded-full font-semibold shadow hover:bg-teal-100 transition">
                                Ver paquetes
                            </button>
                        </>
                    ) : (
                        children // Permite insertar otro contenido si es necesario
                    )}
                </div>
            </div>
        </div>
    );
}
