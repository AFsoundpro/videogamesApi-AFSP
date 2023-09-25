// Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.css';
import img from '/img/pngC.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={img} alt="Logo" />
          {/* <h5>Videojuegos API</h5> */}
        </Link>
        <ul className="nav-menu">
        <li className="nav-item">
            <NavLink to="/home" activeClassName="active" className="nav-link">
              inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home" activeClassName="active" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/detailPage" activeClassName="active" className="nav-link">
              About
            </NavLink>
          </li>
          {/* Agrega más elementos de menú según tus necesidades */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
