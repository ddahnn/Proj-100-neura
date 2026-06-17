import { useState } from "react";

export const CookiePage = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="cookie-container">

            <div className={`cookie-config ${!isOpen ? "cookie-hide" : ""}`}>
                <p>
                Sua privacidade é importante para nós. Utilizamos cookies para melhorar sua
                experiência. Ao continuar navegando, você concorda com os termos da nossa{" "}
                <a href="http://100neura.com/privacidade">Política de Privacidade.</a>
                </p>
            <div className="btn-cookie">
                <button onClick={() => setIsOpen(false)}>Entendi!</button>
            </div>
            </div>

            <button
                className={`btn-cookie-settings ${isOpen ? "settings-hide" : ""}`}
                onClick={() => setIsOpen(true)}>
                Configuração de Cookies
            </button>
        </div>
    );
};