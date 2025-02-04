
import ArrowuprightIcon from "@/assets/icons/arrow-up-right.svg";


export default function Banner() {
    return (<section className="relative bg-brand-900 text-white py-12">
        <div
            className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6"
        >
            <div className="max-w-lg text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Viaja hoy, paga a tu ritmo
                </h1>
                <p className="text-base md:text-lg mb-6">
                    Descubre el mundo sin preocuparte por el presupuesto. Con nuestra
                    financiación flexible, tus sueños de viajar se hacen realidad. ¡Empieza
                    tu aventura ahora!
                </p>
            </div>

            <div className="mt-6 md:mt-0">
                <button
                    className="flex justify-center items-center bg-white text-teal-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
                >
                    Financia tu viaje ahora
                    <ArrowuprightIcon />
                </button>
            </div>
        </div>

        <svg
            className="absolute bottom-0 right-0 w-[500px] h-[280px] md:w-[600px] opacity-20 pointer-events-none"
            width="556"
            height="280"
            viewBox="0 0 556 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask
                id="mask0_4399_10006"
                maskUnits="userSpaceOnUse"
                x="0"
                y="-246"
                width="623"
                height="623"
            >
                <path d="M623 -246H0V377H623V-246Z" fill="white"></path>
            </mask>
            <g mask="url(#mask0_4399_10006)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M411.604 266.533C381.376 316.915 344.821 339.62 311.5 339.62C278.178 339.62 241.624 316.915 211.395 266.533C181.612 216.895 161.98 145.908 161.98 65.5C161.98 -14.9084 181.612 -85.8946 211.395 -135.532C241.624 -185.913 278.178 -208.62 311.5 -208.62C344.821 -208.62 381.376 -185.913 411.604 -135.532C441.386 -85.8946 461.02 -14.9084 461.02 65.5C461.02 145.908 441.386 216.895 411.604 266.533ZM623 65.5C623 -106.537 483.535 -246 311.5 -246C139.463 -246 0 -106.537 0 65.5C0 237.535 139.463 377 311.5 377C483.535 377 623 237.535 623 65.5ZM37.38 65.5C37.38 177.422 104.454 273.675 200.598 316.258C154.498 259.53 124.6 168.336 124.6 65.5C124.6 -37.3346 154.498 -128.531 200.598 -185.259C104.454 -142.675 37.38 -46.4207 37.38 65.5ZM585.62 65.5C585.62 177.422 518.545 273.675 422.403 316.258C468.502 259.53 498.4 168.336 498.4 65.5C498.4 -37.3346 468.502 -128.531 422.403 -185.259C518.545 -142.675 585.62 -46.4207 585.62 65.5ZM311.5 99.765C330.424 99.765 345.765 84.4236 345.765 65.5C345.765 46.576 330.424 31.235 311.5 31.235C292.576 31.235 277.235 46.576 277.235 65.5C277.235 84.4236 292.576 99.765 311.5 99.765Z"
                    fill="#006179"></path>
            </g>
        </svg>
    </section>)

}