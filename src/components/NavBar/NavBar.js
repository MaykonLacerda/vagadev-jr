import React from 'react';
import { Link } from "react-router-dom";

import './styles.css';

import menu from '../../assets/svgs/icon-hamburguer.svg'
import logo from '../../assets/svgs/logo-n1-rush-fundo-escuro.svg'
import paper_plane from '../../assets/svgs/paper-plane.svg'
import search from '../../assets/svgs/search-solid.svg'
import shopping_bag from '../../assets/svgs/shopping-bag-solid.svg'

export const NavBar = () => {
  return (
    <nav className="nav wrapper">
      <ul className="nav-list">
        <div className="nav-item">
          <li className="menu"><img src={menu} alt="menu"></img></li>

          <Link to="/">
            <li>
              <img src={logo} alt="N1 Rush"></img>
            </li>
          </Link>
        </div>
        <div className="client-menu">
          <Link to="/" className="nav-item client-menu">
            <li><img src={paper_plane} alt="Contato"></img></li>
            <li>Contato</li>
          </Link>

          <Link to="/" className="nav-item client-menu">
            <li><img src={search} alt="Buscar"></img></li>
            <li>Buscar</li>
          </Link>

          <Link to="/" className="nav-item">
            <li><img src={shopping_bag} alt="Carrinho"></img></li>
            <li className="amount"><p>2</p></li>
          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar;
