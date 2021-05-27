import React, {useState} from 'react'

import './styles.css'

export const FeaturedCards = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="featured-cards">
      <div className="card-top">
        <img src={props.image} alt="outriders"/>
        <div className="media-card">
          <h4>{props.name}</h4>
          <p>{props.value}</p>
          <div className="modal">
            <button>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCards;
