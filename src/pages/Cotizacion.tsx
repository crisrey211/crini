import FAQS from "@/components/FAQS";
import Multistepper from "@/components/Multistepper";
import Hero from "@/components/sections/Hero";

export default function Cotizacion() {
    return (
        <div className="w-full min-h-screen">
            <Hero hideContent>
                <Multistepper />
            </Hero>
            <FAQS />
        </div>
    )
}
