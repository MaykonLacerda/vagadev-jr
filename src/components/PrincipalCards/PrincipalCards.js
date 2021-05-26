import React from 'react'

import zelda from '../../assets/img/zelda_banner.jpg'
import sekiro from '../../assets/img/sekiro_banner.jpg'

import './styles.css'

export const PrincipalCards = () => {
  return (
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
  )
}

export default PrincipalCards;
