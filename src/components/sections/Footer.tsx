import Facebook from "@/assets/icons/facebook.svg";
import Whatsapp from "@/assets/icons/whatsapp.svg";
import Telegram from "@/assets/icons/telegram.svg";
import V1_logo_white from "@/assets/icons/v1-white.svg";

export default function Footer() {
    return (
        <footer className="bg-brand-900 text-white py-11">
            <div className="container mx-auto flex flex-col gap-14 px-4 md:px-8">
                <div className="grid grid-cols-1 gap-4 sm:px-6 lg:grid-cols-2 lg:px-0 md:grid-cols-2">
                    <div className="flex flex-col gap-4 md:w-3/5">
                        <V1_logo_white />
                        <p className="text-base-medium md:text-balance">
                            Explora los mejores paquetes de viaje y experiencias adaptadas a tus
                            preferencias. Permítenos ayudarte a planear las vacaciones de tus
                            sueños.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
                        <div className="min-w-52 px-3">
                            <h3 className="text-sm-normal">Atención al cliente</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/contacto" className="text-sm-medium">Contáctanos</a>
                                </li>
                                <li>
                                    <a href="/privacidad" className="text-sm-medium"
                                    >Aviso de privacidad
                                    </a>
                                </li>
                                <li>
                                    <a href="/terminos" className="text-sm-medium"
                                    >Términos y condiciones
                                    </a>
                                </li>
                                <li>
                                    <a href="/cookies" className="text-sm-medium">Política de cookies</a>
                                </li>
                            </ul>
                        </div>
                        <div className="min-w-52 px-3">
                            <h3 className="text-sm-normal">Sobre nosotros</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/quienes-somos" className="text-sm-medium">Quiénes somos</a>
                                </li>
                                <li>
                                    <a href="/afiliados" className="text-sm-medium"
                                    >Programa de afiliados
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="min-w-52 px-3">
                            <h3 className="text-sm-normal">Síguenos</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="https://facebook.com" className="text-sm hover:cursor-pointer flex items-center">
                                        <Facebook />
                                        <span className="text-textColor-gray">Facebook</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://whatsapp.com"
                                        className="text-sm hover:cursor-pointer flex items-center"
                                    >
                                        <Whatsapp />
                                        <span className="text-textColor-gray">Whatsapp</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://telegram.org"
                                        className="text-sm hover:cursor-pointer flex items-center"
                                    >
                                        <Telegram />
                                        <span className="text-textColor-gray">Telegram</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-teal-800"></div>
                <p className="text-center text-sm h-5">
                    Copyright © 2025 Crinigo. Todos los derechos reservados.
                </p>
            </div>
        </footer >

    )
}
