import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { offerquestions } from "@/data/offerquestions";
import { offers } from "@/data/offers";
import Handbag from "@/assets/icons/handbag.svg";
import Plaza from "@/assets/icons/plaza.svg";
import Airplane from "@/assets/icons/airplane.svg";
import Box from "@/assets/icons/box.svg";
import Calendar from "@/assets/icons/calendar.svg";
import Haze from "@/assets/icons/haze.svg";
import Check from "@/assets/icons/check.svg";
import Plus from "@/assets/icons/plus.svg";

const filters = {
    Todos: 0,
    "Paquetes vacacionales": 1,
    "Cajas smartbox": 2,
    Vuelos: 3,
    "Vuelos + Hotel": 4,
    "Alquiler de coches": 5,
    Playas: 6,
    Montaña: 7,
    Ciudades: 8,
}

const filterButtons = [
    { icon: <Handbag />, text: "Paquetes vacacionales" },
    { icon: <Box />, text: "Cajas de smartbox" },
    { icon: <Airplane />, text: "Vuelos" },
    { icon: <Plaza />, text: "Vuelos + Hotel" },
    { icon: "🚗", text: "Alquiler de coches" },
    { icon: "🏖️", text: "Playas" },
    { icon: "🏔️", text: "Montaña" },
    { icon: "🏙️", text: "Ciudades" },
]

const offersWithTypes = offers.map((offer) => ({
    ...offer,
    type: offer.type,
}))

export default function LatestOffers() {
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedOffer, setSelectedOffer] = useState<(typeof offersWithTypes)[0] | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [showAllFilters, setShowAllFilters] = useState(false)
    const [showAllOffers, setShowAllOffers] = useState(false)
    const [randomQuestions, setRandomQuestions] = useState<typeof offerquestions>([])
    const [activeFilter, setActiveFilter] = useState<number>(0)

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    const itemsPerPage = isMobile ? 1 : 3
    const filteredOffers =
        activeFilter === 0 ? offersWithTypes : offersWithTypes.filter((offer) => offer.type === activeFilter)
    const startIndex = (currentPage - 1) * itemsPerPage
    const visibleOffers = showAllOffers ? filteredOffers : filteredOffers.slice(startIndex, startIndex + itemsPerPage)
    const totalPages = Math.ceil(filteredOffers.length / itemsPerPage)

    useEffect(() => {
        setCurrentPage(1)
    }, [activeFilter])

    useEffect(() => {
        if (selectedOffer) {
            const shuffled = [...offerquestions].sort(() => Math.random() - 0.5)
            setRandomQuestions(shuffled.slice(0, 3 + Math.floor(Math.random() * 2)))
        }
    }, [selectedOffer, offerquestions]) // Added offerquestions to dependencies

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

    const visibleFilters = showAllFilters ? Object.entries(filters) : Object.entries(filters).slice(0, 4)

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <motion.h2
                    className="text-center mb-4 flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="w-1/2">
                        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">Últimas ofertas</h1>
                        <p className="text-gray-600">
                            Ya sea que busques emocionantes aventuras, escapadas tranquilas o inmersiones culturales, nuestros itinerarios cuidadosamente seleccionados ofrecen una mezcla inolvidable de exploración y relajación.
                        </p>
                    </div>
                </motion.h2>

                {/* Botones de filtro */}
                <div className={`mb-12 ${isMobile ? "overflow-x-auto" : ""} pb-4`}>
                    <div
                        className={`flex gap-4 ${isMobile ? "" : "flex-wrap justify-center"}`}
                        style={{ minWidth: isMobile ? "max-content" : "auto" }}
                    >
                        {visibleFilters.map(([key, value], index) => (
                            <Button
                                className="rounded-full"
                                key={key}
                                variant={activeFilter === value ? "default" : "outline"}
                                onClick={() => {
                                    setActiveFilter(filters[key as keyof typeof filters])
                                    setCurrentPage(1)
                                }}
                            >
                                <span className="mr-2"> {filterButtons[index]?.icon || "🏷️"}</span>
                                {value === 0 ? "Todos" : filterButtons[index]?.text}
                            </Button>
                        ))}
                        {!showAllFilters && !isMobile && (
                            <Button variant="outline" className="rounded-full" onClick={() => setShowAllFilters(true)}>
                                <span className="mr-2"><Plus /></span>
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
                                                    <span className="mr-2"><Check /></span>
                                                    {detail}
                                                </div>
                                            ))}
                                            {offer.duration && (
                                                <div className="flex items-center text-gray-600">
                                                    <span className="mr-2"><Haze /></span>
                                                    {offer.duration}
                                                </div>
                                            )}
                                            {offer.dates && (
                                                <div className="flex items-center text-gray-600">
                                                    <span className="mr-2"><Calendar /></span>
                                                    {offer.dates}
                                                </div>
                                            )}
                                        </div>
                                        <div className="my-4 text-center">
                                            <hr className="w-1/2 mx-auto border-t border-gray-300" />
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="text-sm text-gray-500">Desde</div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-gray-400 line-through text-sm">{offer.price.original}</span>
                                                <span className="text-2xl font-bold">{offer.price.current}</span>
                                            </div>
                                            {offer.priceNote && <div className="text-sm text-gray-500">{offer.priceNote}</div>}
                                        </div>

                                        <Button className="w-full mt-4 rounded-full" onClick={() => setSelectedOffer(offer)}>
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
                            <Button className="rounded-full" variant="outline" size="icon" onClick={prevPage} disabled={currentPage === 1}>
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <span className="text-sm font-medium">
                                {currentPage.toString().padStart(2, "0")} / {totalPages.toString().padStart(2, "0")}
                            </span>
                            <Button className="rounded-full" variant="outline" size="icon" onClick={nextPage} disabled={currentPage === totalPages}>
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    )}

                    {/* Botón "Ver más ofertas" para escritorio */}
                    {!isMobile && !showAllOffers && filteredOffers.length > itemsPerPage && (
                        <div className="flex justify-center mt-8">
                            <Button variant="outline" className="rounded-full" onClick={() => setShowAllOffers(true)}>
                                <span className="mr-2"><Plus /></span>
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

