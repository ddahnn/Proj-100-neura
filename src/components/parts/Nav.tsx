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
                <li><a href="#" className="btn-cadastrar">Cadastrar <img src="https://www.figma.com/design/y2eL9Mkr7vAVRJHUCK3zdc/Arrows-Icons---Free--Community-?node-id=3-182&m=dev&t=v30cwqmy3JLUZM46-1" alt="seta " className="hid" style={{ height: '15px' }} /></a></li>
                <li><Pesquisa/></li>
            </ul>
        </nav>
    )
}