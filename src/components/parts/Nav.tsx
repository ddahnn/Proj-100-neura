import React from 'react';
import Pesquisa from './pesquisar';

export const HeaderNav = () =>  {
    return  (
        <nav>
            <a href="#">
                <img src="src\assets\100-neura-logo-grande-escuro.png" alt="logo" />
            </a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Quem Somos</a></li>
                <li><a href="#">Busco Terapia</a></li>
                <li><a href="#">Sou Terapeuta</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#" className="btn-login">Login <img src="../src/assets/seta.png" alt="seta " className="hid" /></a></li>
                <li><a href="#" className="btn-cadastrar">Cadastrar <img src="../src/assets/arrow-withe.png" alt="seta " className="hid"  /></a></li>
                <li><Pesquisa/></li>
            </ul>
        </nav>
    )
}