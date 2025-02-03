import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "@/components/sections/Footer";
import About from "@/pages/About";
import Banner from "@/components/sections/Banner";
import Socialnetwork from "@/components/sections/Socialnetwork";

function App() {

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/nosotros" element={<About />} />
      </Routes>
      <Banner />
      <Socialnetwork />
      <Footer />
    </div>
  )
}

export default App
