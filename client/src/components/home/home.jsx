import React from 'react';
import Header from '../header/header';
import GameList from '../gameList/gameList';
import Filters from '../filters/filters';
import './Home.module.css'; // Estilos para la página principal

function HomePage({ games }) {
  return (
    <div className="home-page">
      <Header />
      <Filters />
      <GameList />
    </div>
  );
}

export default HomePage;
