import React from 'react';

export const Header = () => {
  return (
    <header>
      <div className="hero-section">

        <img src="./src/assets/fundo100neura.png" className="img-overlay" alt="Ilustração" />

        <div className="text-area">
          <h1>Conectando você ao <span className="green-text">seu terapeuta ideal</span>, sem neura nenhuma.</h1>
          <h2>Saúde mental descomplicada, usando a <span className="orange-text">tecnologia</span> para <span className="orange-text">diminuir</span> a <span className="orange-text">burocracia.</span></h2>

          <p>
            No <span className="bold-text">100 neura</span>, a <span className="bold-text">tecnologia trabalha a favor da escuta.</span> Usamos soluções simples e atuais para <span className="bold-text">conectar pessoas a terapeutas que realmente façam sentido para sua história</span>, suas necessidades e seu momento de vida – sem complicar o que deveria ser cuidado.
          </p>

          <div className="btn-hero">
            <ul>
              <li><a href="#" className='btn btn-primary'>Busco Terapia <img src="/src/assets/seta.png" alt="seta " className="hidden" /></a></li>
              <li><a href="#" className='btn btn-secondary'>Sou Terapeuta <img src="/src/assets/seta.png" alt="seta " className="hidden" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};