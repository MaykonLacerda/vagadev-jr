import React  from 'react';

import BannerSlider from '../../components/Banner/BannerSlider'
import NavBar from '../../components/NavBar/NavBar'
import PrincipalCards from '../../components/PrincipalCards/PrincipalCards'
import FeaturedCards from '../../components/FeaturedCards/FeaturedCards'

import featured_icon from '../../assets/svgs/featured-icon.svg'
import logo_reduced from "../../assets/svgs/logo-reduced.svg"
import outriders from '../../assets/svgs/outriders.svg'
import cyberpunk from '../../assets/svgs/cyberpunk.svg'
import donkey_kong from '../../assets/svgs/donkey-kong.svg'
import zelda from '../../assets/img/zelda_banner.jpg'
import sekiro from '../../assets/img/sekiro_banner.jpg'

import "./styles.css"

function Home() {

  return (
    <div>
      <header>
          <NavBar />
          <BannerSlider />
      </header>

      <main className="wrapper">
        <div className="principal">
          <div className="principal-card-container">
            <PrincipalCards image={zelda} text="The Legend of Zelda - Breath of the wild"/>
            <PrincipalCards image={sekiro} text="SEKIRO - Shadows die twice"/>
          </div>
        </div>
        <div className="featured">
          <div className="featured-title">
            <img src={featured_icon} alt="Zelda"/>
            <h2>Produtos em destaque</h2>
          </div>
          <div className="card-container">
            <FeaturedCards image={outriders} name="Outriders" value="R$ 200,00" />
            <FeaturedCards image={cyberpunk} name="CYBERPUNK 2077 " value="R$ 200,00" />
            <FeaturedCards image={donkey_kong} name="Donkey Kong Country Tropical Freeze" value="R$ 200,00" />
          </div>
        </div>
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
