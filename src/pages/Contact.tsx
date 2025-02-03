import FAQS from "@/components/FAQS";
import Hero from "@/components/sections/Hero";
import Location from "@/components/sections/Locations";
import Socialnetwork from "@/components/sections/Socialnetwork";

export default function Contact() {
  return (
    <div className="w-full min-h-screen">
      <Hero title="Conoce nuestra pasión por hacerte viajar" />
      <Location />
      <FAQS />
      <Socialnetwork />
    </div>
  )
}
