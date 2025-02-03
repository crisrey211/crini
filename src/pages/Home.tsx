import FAQS from "@/components/FAQS";
import Hero from "@/components/sections/Hero";
import Banner from "@/components/sections/Banner";
import LastestOffers from "@/components/sections/LastestOffers";
import Socialnetwork from "@/components/sections/Socialnetwork";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Hero title="Explora el mundo con nuestros paquetes de viaje"
        subtitle="Explora los mejores paquetes de viaje y experiencias adaptadas a tus preferencias. 
        Permítenos ayudarte a planear las vacaciones de tus sueños."/>
      <LastestOffers />
      <Banner />
      <Testimonials />
      <FAQS />
      <Socialnetwork />
    </div>)
}
