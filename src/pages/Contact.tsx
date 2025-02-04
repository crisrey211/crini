import FAQS from "@/components/FAQS";
import Hero from "@/components/sections/Hero";
import Location from "@/components/sections/Locations";
import Socialnetwork from "@/components/sections/Socialnetwork";
import { Outlet, useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  const isMainContactRoute = location.pathname === "/contacto"; // Detectar si estamos en /contacto

  return (
    <div className="w-full min-h-screen">
      {/* Solo muestra Hero en la ruta principal /contacto */}
      {isMainContactRoute && (
        <Hero title="Estamos aquí para planear tu próxima aventura" />
      )}

      {/* Renderizar Outlet para subrutas */}
      <Outlet />

      {/* Renderizar contenido adicional solo en la página principal */}
      {isMainContactRoute && (
        <>
          <Location />
          <FAQS />
          <Socialnetwork />
        </>
      )}
    </div>
  );
}
