import React, {useState} from 'react'

import close_btn from '../../assets/svgs/close-btn.svg'
import mario from '../../assets/svgs/mario.svg'

import './styles.css';

export const ButtonModal = () => {

  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <div>
      <button className="button" onClick={() => setIsModalVisible(true)}>Comprar</button>
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
