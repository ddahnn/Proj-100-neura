import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Sobre from "./pages/quemSomos/quemSomos";
import Contato from "./pages/Contato/Contato";
import Profissional from "./pages/Profissionaiss/Profissional";
import Profissionais from "./pages/Profissionais/[slug]/Profissionais";


export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quemSomos" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/profissionais/:slug" element={<Profissional />} />
        <Route path="/profissionais" element={<Profissionais />} />
        
        <Route path="*" element={<span style={{ fontSize: "2rem" }}><br/>Página não encontrada<br/><br/></span>} />
      </Routes>

      <Footer />
    </>
  );
}