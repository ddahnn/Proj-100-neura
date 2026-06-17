import { useState } from "react";

export default function Pesquisa() {
const [mostrarBusca, setMostrarBusca] = useState(false);

return (
    <div className="container-pesquisa">

    <button
        className="btn-lupa"
        onClick={() => setMostrarBusca(!mostrarBusca)}
    >
        🔎
    </button>

    <input
        type="text"
        placeholder="Pesquisar..."
        className={`input-pesquisa ${
        mostrarBusca ? "ativo" : ""
        }`}
    />

    </div>
);
}