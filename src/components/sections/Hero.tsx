
interface HeroProps {
    title: string,
    subtitle?: string
}

export default function Hero({ title, subtitle }: HeroProps) {
    return (
        <div className="relative w-full h-screen bg-cover bg-center bg-[url('/peru.jpg')]">

            <div
                className="flex items-center justify-center h-full text-center text-white px-6"
            >
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
                    {subtitle && <p className="mt-4 text-lg">
                        {subtitle}
                    </p>}
                    <button
                        className="mt-6 bg-white text-teal-900 px-6 py-3 rounded-full font-semibold shadow hover:bg-teal-100 transition"
                    >
                        Contáctanos
                    </button>
                </div>
            </div>
        </div>
    )
}

