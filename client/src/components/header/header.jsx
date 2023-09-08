import React, { useState } from 'react';
import './Header.module.css';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la búsqueda o la redirección a la página de resultados
    console.log('Búsqueda enviada:', searchTerm);
  };

  return (
    <header className="header">
      <h1>Videojuegos</h1>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Buscar videojuegos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Buscar</button>
      </form>
    </header>
  );
}

export default Header;
