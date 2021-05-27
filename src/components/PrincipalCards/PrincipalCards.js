import React from 'react'

import './styles.css'

export const PrincipalCards = (props) => {
  return (
    <div className="principal-cards">
      <div className="card">
        <img src={props.image} alt="Zelda"/>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default PrincipalCards;
