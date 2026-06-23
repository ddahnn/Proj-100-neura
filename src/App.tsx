import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/sobre";
import Contato from "./pages/Contato/Contato";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>

      <Footer />
    </>
  );
}