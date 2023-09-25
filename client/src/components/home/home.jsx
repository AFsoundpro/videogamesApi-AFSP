import React from 'react';
import Navbar from '../Nav/nav';
import GameList from '../gameList/gameList';
import Filters from '../filters/filters';
import './Home.module.css'; // Estilos para la página principal

function HomePage({ games }) {
  return (
    <div className="home-page">
      <Navbar />
      <br />
      <hr />
      <br />
      <Filters />
      <br />
      <hr />
      <GameList />
      <br />
      <hr />
    </div>
  );
}

export default HomePage;
