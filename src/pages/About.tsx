import Essence from "@/components/sections/Essence";
import Hero from "@/components/sections/Hero";
import History from "@/components/sections/History";
import Socialnetwork from "@/components/sections/Socialnetwork";

export default function About() {
    return (
        <div className="w-full min-h-screen">
            <Hero title="Conoce nuestra pasión por hacerte viajar" />
            <History />
            <Essence />
            <Socialnetwork />
        </div>
    )
}
