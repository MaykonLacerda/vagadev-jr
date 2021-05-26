import React from 'react'

import outriders from '../../assets/svgs/outriders.svg'

import './styles.css'

export const FeaturedCards = () => {
  return (
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
  )
}

export default FeaturedCards;
