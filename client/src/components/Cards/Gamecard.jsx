import React from 'react';
import './GameCard.css';
import { Link } from 'react-router-dom';

function GameCard({videogames}) {
  return (
    <div className="game-card">
      {videogames.map((game) => (
        <div key={game.id}>
          <img src={game.image} alt={game.name} />
          <hr />
          <h3>{game.name}</h3>
          <h4>Rating:</h4>
          <p>{game.rating}</p>
          {/* <div>
            <strong>Género(s):</strong>
            <ul>
              {game.genre.map((genre, index) => (
                <li key={index}>{genre.name}</li>
              ))}
            </ul>
          </div> */}
          <hr />
          <Link to={`/home/${game.id}`}>Ver detalles</Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default GameCard;
