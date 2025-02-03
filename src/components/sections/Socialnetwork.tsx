import Facebook from "@icons/facebook.svg";
import Telegram from "@icons/telegram.svg";
import Whatsapp from "@icons/whatsapp.svg";
import egypt from "@assets/egypt.jpg";
import { motion } from "framer-motion";


export default function NuevoDemo() {
    return (
        <motion.footer
            className=" py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto py-48">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Primer contenedor: Imágenes superpuestas */}
                    <motion.div
                        className="relative w-64 h-64 mb-8 md:mb-0"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?w=800&h=600&fit=crop"
                            alt="Destino turístico 1"
                            width={150}
                            height={200}
                            className="absolute top-0 left-0 z-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop"
                            alt="Destino turístico 2"
                            width={200}
                            height={150}
                            className="absolute bottom-0 right-0 z-20 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop"
                            alt="Hotel de lujo"
                            width={120}
                            height={120}
                            className="absolute bottom-0 left-0 z-30 rounded-lg shadow-lg hover:scale-105 transition-transform"
                        />
                    </motion.div>

                    {/* Segundo contenedor: Redes sociales */}
                    <motion.div
                        className="text-center mb-8 w-9/12 lg:w-1/3 md:mb-0 py-10 "
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 font-inter ">Síguenos en nuestras redes sociales</h1>
                        <div className="flex justify-center gap-6">
                            <div className="flex items-center gap-2 mt-6">
                                <Facebook />
                                <span className="text-gray-800 font-medium">crinigo</span>
                            </div>
                            <div className="flex items-center gap-2 mt-6">
                                <Whatsapp />
                                <span className="text-gray-800 font-medium">crinigo</span>
                            </div>
                            <div className="flex items-center gap-2 mt-6">
                                <Telegram />
                                <span className="text-gray-800 font-medium">crinigo</span>
                            </div>

                        </div>
                    </motion.div>

                    {/* Tercer contenedor: Imágenes desde la derecha */}
                    <motion.div
                        className="relative w-64 h-64"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop"
                            alt="Hotel de lujo"
                            width={150}
                            height={200}
                            className="absolute top-0 right-0 z-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
                        />
                        <img
                            src={egypt}
                            alt="Imagen 5"
                            width={120}
                            height={150}
                            className="absolute bottom-0 left-0 z-20 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop"
                            alt="Imagen 6"
                            width={120}
                            height={120}
                            className="absolute bottom-0 right-0 z-30 rounded-lg shadow-lg hover:scale-105 transition-transform"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.footer>
    )
}


