import React, { useState } from 'react';
import Pesquisa from '../pesquisar/pesquisar';
import './nav.modules.css';
import { Container } from '../container/container';

export const HeaderNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Container>
            <nav>
                <a href="#" className="logo">
                    <img src="src\assets\100-neura-logo-grande-escuro.png" alt="logo" />
                </a>

                <button 
                    className={`hamburgerBtn ${menuOpen ? 'ativo' : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <img src="../src/assets/hamburger.png" alt="menu" />
                </button>

                <ul className={menuOpen ? 'menu-open' : ''}>
                    <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
                    <li><a href="#" onClick={() => setMenuOpen(false)}>Quem Somos</a></li>
                    <li><a href="#" onClick={() => setMenuOpen(false)}>Busco Terapia</a></li>
                    <li><a href="#" onClick={() => setMenuOpen(false)}>Sou Terapeuta</a></li>
                    <li><a href="#" onClick={() => setMenuOpen(false)}>Blog</a></li>
                    <li>
                        <a href="#" className="btnLogin" onClick={() => setMenuOpen(false)}>
                            Login <img src="../src/assets/seta.png" alt="seta " className="hid" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="btnCadastrar" onClick={() => setMenuOpen(false)}>
                            Cadastrar <img src="../src/assets/arrow-withe.png" alt="seta " className="hid" />
                        </a>
                    </li>
                    <li><Pesquisa /></li>
                </ul>
            </nav>
        </Container>
    )
}