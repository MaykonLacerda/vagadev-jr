import React  from 'react';

import BannerSlider from '../../components/Banner/BannerSlider'
import NavBar from '../../components/NavBar/NavBar'

import zelda from '../../assets/img/zelda_banner.jpg'
import sekiro from '../../assets/img/sekiro_banner.jpg'
import featured_icon from '../../assets/svgs/featured-icon.svg'
import outriders from '../../assets/svgs/outriders.svg'
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
        <div className="principal-cards">
          <div className="card">
            <img src={zelda} alt="Zelda"/>
            <p>The Legend of Zelda - Breath of the wild </p>
          </div>
          <div className="card">
            <img src={sekiro} alt="Sekiro"/>
            <p>The Legend of Zelda - Breath of the wild </p>
          </div>
        </div>

        <div className="featured">
          <div className="featured-title">
            <img src={featured_icon} alt="Zelda"/>
            <h2>Produtos em destaque</h2>
          </div>

          <div className="featured-cards">
            <div className="card-top">
              <img src={outriders} alt="outriders"/>
              <div className="media-card">
                <h4>Outriders</h4>
                <p>R$ 200,00</p>
                <button>Comprar</button>
              </div>
            </div>

            <div className="card-top">
              <img src={outriders} alt="outriders"/>
              <div className="media-card">
                <h4>Outriders</h4>
                <p>R$ 200,00</p>
                <button>Comprar</button>
              </div>
            </div>

            <div className="card-top">
              <img src={outriders} alt="outriders"/>
              <div className="media-card">
                <h4>Outriders</h4>
                <p>R$ 200,00</p>
                <button>Comprar</button>
              </div>
            </div>
          </div>
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
