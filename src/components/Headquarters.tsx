import { ReactNode } from "react";

interface HeadquartersProps {
    name: string;
    address: string;
    phone: string;
    schedule: string[];
    mapPosition: "right" | "left"; // Asumo que solo puede ser "right" o "left"
    mapUrl: string;
}
export default function Headquarters({ name, address, phone, schedule, mapPosition, mapUrl }: HeadquartersProps) {
    return (<div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-8
  {mapPosition === 'left' ? 'justify-around' : 'justify-between'}"
    >
        {
            mapPosition === "left" ? (
                <>
                    <div className="flex-col justify-center w-auto h-[452px] sm:w-[630px]">
                        <iframe
                            src={mapUrl}
                            className="w-full h-full rounded-lg"
                            loading="lazy"
                        />
                    </div>

                    <div className="max-w-[500px] text-center lg:text-left">
                        <h2 className="text-2xl font-bold mb-4">{name}</h2>
                        <p className="mb-2">
                            <span className="font-semibold">Dirección:</span> {address}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Teléfono:</span>
                            <a href={`tel:${phone}`} className="text-blue-500 hover:underline">
                                {phone}
                            </a>
                        </p>
                        <p className="font-semibold mb-2">Horario:</p>
                        <ul className="list-disc list-inside">
                            {schedule.map((item: ReactNode) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <>
                    <div className="max-w-[500px] text-center lg:text-left">
                        <h2 className="text-2xl font-bold mb-4">{name}</h2>
                        <p className="mb-2">
                            <span className="font-semibold">Dirección:</span> {address}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Teléfono:</span>
                            <a href={`tel:${phone}`} className="text-blue-500 hover:underline">
                                {phone}
                            </a>
                        </p>
                        <p className="font-semibold mb-2">Horario:</p>
                        <ul className="list-disc list-inside">
                            {schedule.map((item: ReactNode) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-auto h-[452px] sm:w-[630px]">
                        <iframe
                            src={mapUrl}
                            className="w-full h-full rounded-lg"
                            loading="lazy"
                        />
                    </div>
                </>
            )
        }
    </div>
    )
}
