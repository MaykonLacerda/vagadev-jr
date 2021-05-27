import React from 'react'

import ButtonModal from '../ButtonModal/ButtonModal'

import './styles.css'

export const FeaturedCards = (props) => {
  return (
    <div className="featured-cards">
      <div className="card-top">
        <img src={props.image} alt="outriders"/>
        <div className="media-card">
          <h4>{props.name}</h4>
          <p>{props.value}</p>
          <ButtonModal />
        </div>
      </div>
    </div>
  )
}

export default FeaturedCards;
