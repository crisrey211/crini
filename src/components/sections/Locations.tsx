import Headquarters from "@/components/Headquarters";
import { locations } from "@/data/locations";

export default function Testimonials() {
    return (

        <div className="@container mx-auto py-11 px-4 md:p-20">
            {locations.map((location) => <Headquarters {...location} />)}
        </div>
    )
}