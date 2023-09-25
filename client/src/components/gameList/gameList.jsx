import React, { useState, useEffect } from 'react';
import './Gamelist.module.css';
import GameCard from '../Cards/Gamecard';
import axios from 'axios';

const URL_BASE2 = "http://localhost:3001/videogames";

function GameList() {
  const [videogames, setVideogames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(URL_BASE2);
        const data = response.data;

        if (data) {
          setVideogames(data);
        } else {
          window.alert('¡No hay videojuegos para mostrar!');
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="game-list">
      <h2>Sección de CARTAS</h2>
          {videogames.map((game) => (
            <GameCard key={game.id} videogames={[game]} />
          ))}
    </div>
  );
}

export default GameList;
