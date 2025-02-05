import React, {useState} from 'react'

import close_btn from '../../assets/svgs/close-btn.svg'
import mario from '../../assets/svgs/mario.svg'

import './styles.css';

export const ButtonModal = () => {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isItsBuy, setIsItsBuy] = useState(false)

  const buy = () => {
    setIsModalVisible(true);
    setIsItsBuy(true);
  }

  return (
    <div>
      <div className="button">
        {!isItsBuy ? (
            <button className="buy" onClick={() => buy()}>Comprar</button>
          ) : <button className="itsBuy">Comprado!<img src={mario} alt="" /></button>}
      </div>
      {isModalVisible ? (
        <div className="modal">
          <div className="container">
            <img className="close" src={close_btn} alt="close" onClick={() => setIsModalVisible(false)}/>
            <div className="styles-text-modal">
              <span className="line-modal"></span><p>Pedido realizado com sucesso!</p><span className="line-modal"></span>
            </div>
            <img src={mario} alt="mario" />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ButtonModal;
