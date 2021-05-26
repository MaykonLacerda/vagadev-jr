import React  from 'react';

import BannerSlider from '../../components/Banner/BannerSlider'
import NavBar from '../../components/NavBar/NavBar'
import PrincipalCards from '../../components/PrincipalCards/PrincipalCards'
import FeaturedCards from '../../components/FeaturedCards/FeaturedCards'

import featured_icon from '../../assets/svgs/featured-icon.svg'
import logo_reduced from "../../assets/svgs/logo-reduced.svg"

import "./styles.css"

function Home() {

  return (
    <div>
      <header>
          <NavBar />
          <BannerSlider />
      </header>

      <main className="wrapper">
        <PrincipalCards />
        <div className="featured">
          <div className="featured-title">
            <img src={featured_icon} alt="Zelda"/>
            <h2>Produtos em destaque</h2>
          </div>
          <FeaturedCards />
        </div>

        <div className="end"></div>
      </main>

      <footer>
        <div className="footer">
          <img src={logo_reduced} alt=""/>
          <p>Agência N1 - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
