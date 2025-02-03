import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "@/components/sections/Footer";

function App() {

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
