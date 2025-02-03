"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Datos de ejemplo ampliados para el carrusel
const offers = [
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
    },
]

const questions = [
    {
        question: "¿Cuál es la política de cancelación?",
        answer:
            "Nuestra política de cancelación varía según el tipo de oferta. En general, se ofrece un reembolso completo si se cancela con al menos 7 días de antelación.",
    },
    {
        question: "¿Están incluidas las comidas?",
        answer:
            "Depende de la oferta específica. Algunas incluyen todas las comidas, otras solo el desayuno, y algunas no incluyen comidas. Revisa los detalles de la oferta para más información.",
    },
    {
        question: "¿Cómo puedo contactar con el servicio al cliente?",
        answer:
            "Puede contactarnos por teléfono al +34 900 123 456 o por correo electrónico a info@tuviaje.com. Nuestro equipo está disponible de lunes a viernes de 9:00 a 18:00.",
    },
    {
        question: "¿Ofrecen opciones de pago a plazos?",
        answer:
            "Sí, ofrecemos opciones de pago a plazos para la mayoría de nuestras ofertas. Puede elegir pagar en 3, 6 o 12 meses sin intereses, dependiendo del monto total de su compra.",
    },
]

const tipos = [
    "Paquetes vacacionales",
    "Cajas smartbox",
    "Vuelos",
    "Vuelos + Hotel",
    "Alquiler de coches",
    "Playas",
    "Montaña",
    "Ciudades",
]

const offersWithTypes = offers.map((offer) => ({
    ...offer,
    type: tipos[Math.floor(Math.random() * tipos.length)],
}))

export default function LatestOffers() {
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedOffer, setSelectedOffer] = useState<(typeof offersWithTypes)[0] | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [showAllFilters, setShowAllFilters] = useState(false)
    const [showAllOffers, setShowAllOffers] = useState(false)
    const [randomQuestions, setRandomQuestions] = useState<typeof questions>([])
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    const itemsPerPage = isMobile ? 1 : 3
    const startIndex = (currentPage - 1) * itemsPerPage
    const visibleOffers = showAllOffers ? offersWithTypes : offersWithTypes.slice(startIndex, startIndex + itemsPerPage)
    const totalPages = isMobile ? offersWithTypes.length : Math.ceil(offersWithTypes.length / itemsPerPage)

    useEffect(() => {
        setCurrentPage(1)
    }, [isMobile])

    useEffect(() => {
        if (selectedOffer) {
            const shuffled = [...questions].sort(() => Math.random() - 0.5) //Fixed the sorting algorithm
            setRandomQuestions(shuffled.slice(0, 3 + Math.floor(Math.random() * 2)))
        }
    }, [selectedOffer, questions]) //Added questions to dependencies

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1)
        }
    }

    const filterButtons = [
        { icon: "🎁", text: "Paquetes vacacionales" },
        { icon: "📦", text: "Cajas de smartbox" },
        { icon: "✈️", text: "Vuelos" },
        { icon: "🏨", text: "Vuelos + Hotel" },
        { icon: "🚗", text: "Alquiler de coches" },
        { icon: "🏖️", text: "Playas" },
        { icon: "🏔️", text: "Montaña" },
        { icon: "🏙️", text: "Ciudades" },
    ]

    const visibleFilters = showAllFilters ? filterButtons : filterButtons.slice(0, 4)

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Últimas ofertas
                </motion.h2>

                {/* Botones de filtro */}
                <div className={`mb-12 ${isMobile ? "overflow-x-auto" : ""} pb-4`}>
                    <div
                        className={`flex gap-4 ${isMobile ? "" : "flex-wrap justify-center"}`}
                        style={{ minWidth: isMobile ? "max-content" : "auto" }}
                    >
                        {visibleFilters.map((filter, index) => (
                            <Button key={index} variant={index === 0 ? "default" : "outline"}>
                                <span className="mr-2">{filter.icon}</span>
                                {filter.text}
                            </Button>
                        ))}
                        {!showAllFilters && !isMobile && (
                            <Button variant="outline" onClick={() => setShowAllFilters(true)}>
                                <span className="mr-2">➕</span>
                                Ver más
                            </Button>
                        )}
                    </div>
                </div>

                {/* Carrusel de ofertas */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                        >
                            {visibleOffers.map((offer) => (
                                <Card key={offer.id} className="overflow-hidden">
                                    <div className="relative">
                                        <img
                                            src={offer.image || "/placeholder.svg"}
                                            alt={offer.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="absolute top-4 left-4 bg-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                                            {offer.discount}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                                        <p className="text-gray-600 mb-4">{offer.description}</p>

                                        <div className="space-y-2 mb-4">
                                            {offer.details?.map((detail, i) => (
                                                <div key={i} className="flex items-center text-gray-600">
                                                    <span className="mr-2">✓</span>
                                                    {detail}
                                                </div>
                                            ))}
                                            {offer.duration && (
                                                <div className="flex items-center text-gray-600">
                                                    <span className="mr-2">🕒</span>
                                                    {offer.duration}
                                                </div>
                                            )}
                                            {offer.dates && (
                                                <div className="flex items-center text-gray-600">
                                                    <span className="mr-2">📅</span>
                                                    {offer.dates}
                                                </div>
                                            )}
                                        </div>

                                        <div className="mt-4">
                                            <div className="text-sm text-gray-500">Desde</div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-gray-400 line-through text-sm">{offer.price.original}</span>
                                                <span className="text-2xl font-bold">{offer.price.current}</span>
                                            </div>
                                            {offer.priceNote && <div className="text-sm text-gray-500">{offer.priceNote}</div>}
                                        </div>

                                        <Button className="w-full mt-4" onClick={() => setSelectedOffer(offer)}>
                                            Ver detalles
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navegación del carrusel */}
                    {!showAllOffers && (
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <Button variant="outline" size="icon" onClick={prevPage} disabled={currentPage === 1}>
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <span className="text-sm font-medium">
                                {currentPage.toString().padStart(2, "0")} / {totalPages.toString().padStart(2, "0")}
                            </span>
                            <Button variant="outline" size="icon" onClick={nextPage} disabled={currentPage === totalPages}>
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    )}

                    {/* Botón "Ver más ofertas" para escritorio */}
                    {!isMobile && !showAllOffers && (
                        <div className="flex justify-center mt-8">
                            <Button variant="outline" onClick={() => setShowAllOffers(true)}>
                                <span className="mr-2">➕</span>
                                Ver más ofertas
                            </Button>
                        </div>
                    )}
                </div>

                {/* Sheet de detalles */}
                <Sheet open={!!selectedOffer} onOpenChange={() => setSelectedOffer(null)}>
                    <SheetContent side="right" className="w-full sm:max-w-xl">
                        <SheetHeader>
                            <SheetTitle>{selectedOffer?.title}</SheetTitle>
                        </SheetHeader>

                        {selectedOffer && (
                            <div className="h-full overflow-y-auto pb-24 md:pb-0">
                                {/* Carrusel de imágenes */}
                                <div className="relative h-64 mb-6">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentImageIndex}
                                            src={selectedOffer.images[currentImageIndex]}
                                            alt={`Imagen ${currentImageIndex + 1}`}
                                            className="w-full h-full object-cover rounded-lg"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </AnimatePresence>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {selectedOffer.images.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                                                onClick={() => setCurrentImageIndex(index)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-semibold mb-2">¿Qué incluye tu experiencia?</h3>
                                        <ul className="space-y-2">
                                            {selectedOffer.included.map((item, index) => (
                                                <li key={index} className="flex items-center gap-2">
                                                    <span className="text-green-500">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold mb-2">Descripción</h3>
                                        <p className="text-gray-600">{selectedOffer.fullDescription}</p>
                                    </div>

                                    {/* Preguntas frecuentes */}
                                    <div>
                                        <h3 className="font-semibold mb-2">Preguntas frecuentes</h3>
                                        <Accordion type="single" collapsible className="w-full">
                                            {randomQuestions.map((q, index) => (
                                                <AccordionItem key={index} value={`item-${index}`}>
                                                    <AccordionTrigger>{q.question}</AccordionTrigger>
                                                    <AccordionContent>{q.answer}</AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                </div>

                                {/* Footer fijo en móvil/tablet */}
                                <div className="fixed bottom-0 left-0 right-0 md:relative bg-white border-t md:border-t-0 p-4 md:p-0 md:mt-6">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <div className="text-sm text-gray-500">Precio final</div>
                                            <div className="text-2xl font-bold">{selectedOffer.price.current}</div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="outline">Financiar</Button>
                                            <Button>Reservar</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SheetContent>
                </Sheet>
            </div>
        </section>
    )
}

