import egypt from "@assets/egypt.jpg";

export default function History() {
    return (
        <section className="mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] w-full">
                <div className="flex flex-col gap-6 p-10 md:p-16 w-full max-w-[635px]">
                    <h2 className="text-5xl font-bold mb-6">Sobre Crinigo</h2>
                    <p className="text-lg-normal">
                        En nuestra agencia de viajes, cada destino comienza con un sueño, y ese
                        sueño nació del esfuerzo, la pasión y la determinación de una mujer
                        emprendedora que quiso acercar a las personas a lo que más importa: sus
                        seres queridos y sus momentos más preciados.
                    </p>
                    <p className="text-lg-normal">
                        Entendemos que viajar no es solo recorrer kilómetros, sino crear
                        experiencias inolvidables que llenan el corazón de alegría. Por eso,
                        trabajamos incansablemente para ofrecer servicios de máxima calidad,
                        cuidando cada detalle del viaje para que nuestros clientes disfruten de
                        experiencias únicas y sin preocupaciones.
                    </p>
                    <div className="flex items-center mt-6">
                        <img
                            src="https://rickandmortyapi.com/api/character/avatar/136.jpeg"
                            alt="Nombre"
                            className="w-16 h-16 rounded-full mr-4"
                        />
                        <div>
                            <p className="font-bold text-gray-800">Greicy Milagros</p>
                            <p className="text-gray-600 text-sm">Fundadora · 7 años creando sueños</p>
                        </div>
                    </div>
                </div>

                <div
                    className="bg-brand-900 text-white flex flex-col justify-between py-10 md:py-16 px-10 md:px-16 w-full max-w-[635px]"
                >
                    <div
                        className="w-full max-w-[320px] aspect-square overflow-hidden rounded-lg mb-6"
                    >
                        <img
                            src={egypt}
                            alt="Historias que conectan corazones"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="text-left w-full">
                        <h2 className="text-3xl font-bold mb-4">
                            Historias que conectan corazones y cumplen sueños
                        </h2>
                        <p className="text-teal-100 leading-relaxed mb-6">
                            Nuestra mayor recompensa es saber que hemos sido parte de historias
                            significativas: reencuentros familiares, aventuras compartidas con
                            amigos o el cumplimiento de un sueño personal. Cada cliente es
                            especial, y por eso nos esforzamos en brindar un trato personalizado,
                            cercano y lleno de empatía.
                        </p>
                        <button
                            className="bg-white text-textColor-foreground px-6 py-3 rounded-full font-semibold shadow hover:bg-teal-100 transition"
                        >
                            Contáctanos
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}
