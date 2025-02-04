import V1_logo_white from "@/assets/icons/v1-white.svg";
import { footerLinks } from "@/data/footerinfo";

export default function Footer() {
    return (
        <footer className="bg-brand-900 text-white py-11">
            <div className="container mx-auto flex flex-col gap-14 px-4 md:px-8">
                <div className="grid grid-cols-1 gap-4 sm:px-6 lg:grid-cols-2 lg:px-0 md:grid-cols-2">
                    <div className="flex flex-col gap-4 md:w-3/5">
                        <V1_logo_white />
                        <p className="text-base-medium text-gray-300 md:text-balance">
                            Explora los mejores paquetes de viaje y experiencias adaptadas a tus
                            preferencias. Permítenos ayudarte a planear las vacaciones de tus sueños.
                        </p>
                    </div>

                    {/* Mapeo de secciones del footer */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
                        {footerLinks.map((section) => (
                            <div key={section.title} className="min-w-52 px-3">
                                <h3 className="text-sm-normal-footer">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.links.map(({ text, href, icon: Icon }) => (
                                        <li key={text}>
                                            <a
                                                href={href}
                                                className={`text-sm-medium flex items-center ${Icon ? "hover:cursor-pointer" : ""}`}
                                            >
                                                {Icon && <Icon className="mr-2" />}
                                                <span className="text-textColor-gray">{text}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-teal-800"></div>
                <p className="text-center text-sm h-5">
                    Copyright © 2025 Crinigo. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
