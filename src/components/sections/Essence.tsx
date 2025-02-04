import Crown from "@icons/crown.svg";
import Medal from "@icons/medal.svg";

export default function Essence() {
    return (
        <div className=" py-10 px-6">
            <div className="container mx-auto max-w-[1440px]">
                <h2 className="text-3xl font-bold text-center mb-10">Nuestra Esencia</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] justify-center">
                    <div
                        className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4 max-w-[635px]"
                    >
                        <div
                            className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full"
                        >
                            <Crown />
                        </div>
                        <h3 className="text-xl font-semibold">Misión</h3>
                        <p className="text-lg-normal">
                            Ayudamos a las personas a viajar y reunirse con sus seres queridos,
                            ofreciendo un servicio personalizado y atención de excelencia.
                            Planificamos viajes únicos que combinan comodidad y alegría, creando
                            recuerdos para toda la vida. Nuestros valores de compromiso,
                            honestidad y profesionalismo aseguran que te sientas cuidado y
                            respaldado en cada paso.
                        </p>
                    </div>

                    <div
                        className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4 max-w-[635px]"
                    >
                        <div
                            className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full"
                        >
                            <Medal />
                        </div>
                        <h3 className="text-xl font-semibold">Visión</h3>
                        <p className="text-lg-normal">
                            Aspiramos a ser una agencia de viajes destacada nacional e
                            internacionalmente por nuestro trato humano, precios justos y
                            profesionalismo. Queremos ser la primera opción para quienes buscan
                            reconectar familias, reunir amigos y cumplir sueños. Nuestro propósito
                            es dejar un legado de felicidad y confianza, creando momentos únicos y
                            significativos para nuestros clientes.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}