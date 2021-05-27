import React, {useState} from 'react'

import close_btn from '../../assets/svgs/close-btn.svg'
import mario from '../../assets/svgs/mario.svg'

import './styles.css';

export const ButtonModal = () => {

  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <div className="button">
      <button onClick={() => setIsModalVisible(true)}>Comprar</button>
      {isModalVisible ? (
        <div className="modal">
          <div className="container">
            <img src={close_btn} alt="close" onClick={() => setIsModalVisible(false)}/>
            <h1>Pedido realizado com sucesso!</h1>
            <img src={mario} alt="mario" />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ButtonModal;
