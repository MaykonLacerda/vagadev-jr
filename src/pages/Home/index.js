import React  from 'react';

import BannerSlider from '../../components/Banner/BannerSlider'
import NavBar from '../../components/NavBar/NavBar'

import zelda from '../../assets/img/zelda_banner.jpg'
import sekiro from '../../assets/img/sekiro_banner.jpg'
import featured_icon from '../../assets/svgs/featured-icon.svg'

import "./styles.css"

function Home() {

  return (
    <div>
      <header className="header">
          <NavBar />
          <BannerSlider />
      </header>

      <main className="wrapper">
        <div className="cards">
          <div className="card">
            <div className="top-card">
              <img src={zelda} alt="Zelda"/>
            </div>
            <div className="name-card">
              <p>The Legend of Zelda - Breath of the wild </p>
            </div>
          </div>

          <div className="card">
            <div className="top-card">
              <img src={sekiro} alt="Sekiro"/>
            </div>
            <div className="name-card">
              <p>The Legend of Zelda - Breath of the wild </p>
            </div>
          </div>
        </div>

        <div className="featured">
          <div className="featured-title">
            <img src={featured_icon} alt="Zelda"/>
            <h2>Produtos em destaque</h2>
          </div>
        </div>

        <div className="end"></div>

      </main>
    </div>
  );
}

export default Home;
