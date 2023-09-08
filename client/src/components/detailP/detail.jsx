import React from 'react';
import '../detailP/detail.css';
import { Link } from 'react-router-dom';

function GameDetail() {
  return (
    <div className="game-detail">
      <img src='#' alt='#' />
      <Link to="/home">
        <h1>nombre juego</h1>
      </Link>
      <p>Description: </p>
      <p>Platform: </p>
      {/* Otros detalles del juego */}
    </div>
  );
}

export default GameDetail;
