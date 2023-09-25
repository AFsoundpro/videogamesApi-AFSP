import React from 'react';
import './filters.css';

function Filters({ onFilterChange, onSearch }) {
  const handleGenreChange = (e) => {
    const selectedGenre = e.target.value;
    onFilterChange({ genre: selectedGenre });
  };

  const handleSourceChange = (e) => {
    const selectedSource = e.target.value;
    onFilterChange({ source: selectedSource });
  };

  const handleSearch = () => {
    const searchQuery = document.getElementById('search-input').value;
    onSearch(searchQuery);
  };

  return (
    <div className="filters">
      <input
        type="text"
        id="search-input"
        placeholder="Buscar videojuegos..."
      />
      <label htmlFor="genre-filter">Filtrar por Género:</label>
      <select id="genre-filter" onChange={handleGenreChange}>
        <option value="">Todos los géneros</option>
        <option value="Aventura">Aventura</option>
        <option value="Acción">Acción</option>
        {/* Agrega más opciones de género según tu lista */}
      </select>

      <label htmlFor="source-filter">Filtrar por Origen:</label>
      <select id="source-filter" onChange={handleSourceChange}>
        <option value="">Todos los orígenes</option>
        <option value="API">API</option>
        <option value="Base de datos">Base de datos</option>
      </select>

      <button type="button" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
}

export default Filters;
