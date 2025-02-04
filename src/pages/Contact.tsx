import FAQS from "@/components/FAQS";
import Hero from "@/components/sections/Hero";
import Location from "@/components/sections/Locations";
import Socialnetwork from "@/components/sections/Socialnetwork";
import { Outlet, useLocation } from "react-router-dom";

export default function Contact() {
  // Obtener la ubicación actual de la ruta
  const location = useLocation();

  // Comprobar si estamos en la subruta /cotizacion
  const isCotizacionRoute = location.pathname === "/contacto/cotizacion";

  return (
    <div className="w-full min-h-screen">
      <Hero title="Estamos aquí para planear tu próxima aventura" />

      {/* Renderiza Outlet solo si no estás en la subruta /cotizacion */}
      {!isCotizacionRoute && (
        <>
          <Location />
          <FAQS />
          <Socialnetwork />
        </>
      )}
      <Outlet />

      {/* Siempre muestra FAQS en la subruta cotizacion */}
      {isCotizacionRoute && <FAQS />}

      {/* Este es el espacio donde se renderiza la subruta */}
    </div>
  );
}
