import React from 'react';
import './GameList.module.css';
import GameCard from '../Cards/Gamecard';


function GameList() {
  return (
    <div className="game-list">
      {/* {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))} */}
      <h2>Seccion de CARDS</h2>
      <GameCard />
    </div>
  );
}

export default GameList;
