import Alert from "@/components/Alert";
import Footer from "@/components/sections/Footer";
import About from "@/pages/About";
import Cotizacion from "@/pages/Cotizacion";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Plans from "@/pages/Plans";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";


function App() {

  return (
    <div className="w-full min-h-screen">
      <Alert message={"¡Estrenamos página web! En esta parte estarán las alertas y novedades!"} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paquetes" element={<Plans />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />}>
          <Route path="cotizacion" element={<Cotizacion />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
