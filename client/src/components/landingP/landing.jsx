import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde 'react-router-dom'
import '../landingP/landing.css'; // Importa los estilos CSS Modules
import img from '/img/pngC.png';

function LandingPage() {
  return (
    <div className='landing-page'>
      <br />
      <br />
      <main>
        <img src={img} alt="" />
        <br />
        <hr />
        <br />
        <Link to="/home"> {/* Enlace interno a la ruta 'home' */}
          <button>Iniciar</button>
        </Link>
        <br />
        <hr />
        <br />
      </main>
      <header>
        <h2>VIDEOGAMES APP by AFsoundpro</h2>
      </header>
      <footer>
        <p>Derechos de autor &copy; 2023 videogames API by AFSP</p>
      </footer>
    </div>
    
  );
}

export default LandingPage;
