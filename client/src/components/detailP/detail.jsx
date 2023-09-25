import React, { useEffect, useState } from 'react';
import '../detailP/detail.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Nav/nav';


import ScrollToTop from '../scrollToTop';

const URL_BASE2 = "http://localhost:3001/videogames";

function GameDetail() {
  const  gameID  = useParams();
  console.log(gameID);
  const gameIdNumber = parseInt(gameID.id, 10);
  // console.log(gameIdNumber);
  const [game, setGame] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL_BASE2}/${gameIdNumber}`); // Usar comillas backticks para la URL
        const data = response.data; // Axios ya maneja la respuesta JSON
        console.log(data);
        setGame(data);
      } catch (error) {
        console.error('Error', error.message);
      }
    };
    fetchData();
  }, [gameIdNumber]);

  if (!game) {
    return <p>Cargando...</p>;
  }

  // Resto del código...

  return (
    <div className="game-detail">
      <Navbar />
      <ScrollToTop />
      <br />
      <hr />
      <br />
      <br />
      <div className="card">
        <img src={game.background_image} alt={game.name} />
        <h1>{game.name}</h1>

        <div className="game-info">
          <p>ID: {game.id}</p>
          <p>Plataformas: {game.platforms.join(", ")}</p>
          <p>Descripción: {game.description}</p>
          <p>Fecha de Lanzamiento: {game.release_date}</p>
          <p>Rating: {game.rating}</p>
          <p>Géneros: {game.genres.join(", ")}</p>
        </div>

        <Link to="/home">
          <button>
          Volver a la lista de videojuegos
          </button> 
        </Link>
      </div>
    </div>
  );

// Resto del código...

}

export default GameDetail;
