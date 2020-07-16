import React from 'react';
import './styles/Home.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h1 className="title is-3 has-text-white">Rick and Morty</h1>
        </Link>
        <span className="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          <a
            className="navbar-item"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/prasathmani/rick-and-morty"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
