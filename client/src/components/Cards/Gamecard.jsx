import React from 'react';
import './GameCard.css';
import { Link } from 'react-router-dom';

function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src='#' alt='#' />
      <Link to="/detailPage">
        <h2>Nombre de juego</h2>
      </Link>
      <p>Genres:</p>
      {/* Agrega un enlace a la página de detalle del juego */}
    </div>
  );
}

export default GameCard;
