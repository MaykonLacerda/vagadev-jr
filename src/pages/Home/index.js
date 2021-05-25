import React  from 'react';

import BannerSlider from '../../components/Banner/BannerSlider'
import NavBar from '../../components/NavBar/NavBar'

import zelda from '../../assets/img/zelda_banner.jpg'
import sekiro from '../../assets/img/sekiro_banner.jpg'

import "./styles.css"

function Home() {

  return (
    <div>
      <header className="header">
        <div className="nav wrapper">
          <NavBar />
        </div>
      </header>

      <main>
        <div className="banner">
          <BannerSlider />
        </div>

        <div className="cards wrapper">
          <div className="card-left">
            <div className="top-card">
              <img src={zelda} alt="Zelda"/>
            </div>
            <div className="name-card">
              <p>The Legend of Zelda - Breath of the wild </p>
            </div>
          </div>

          <div className="card-right">
            <div className="top-card">
              <img src={sekiro} alt="Sekiro"/>
            </div>
            <div className="name-card">
              <p>The Legend of Zelda - Breath of the wild </p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Home;
