import React from 'react';
import Pesquisa from './pesquisar';
export const HeaderNav = () =>  {
    return  (
        <nav>
            <img src="src\assets\100-neura-logo-grande-escuro.png" alt="logo" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Quem Somos</a></li>
                <li><a href="#">Busco Terapia</a></li>
                <li><a href="#">Sou Terapeuta</a></li>
                <li><a href="#">Blog</a></li>
                <li><Pesquisa/></li>

            </ul>
        </nav>
    )
}