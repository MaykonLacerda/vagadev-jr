import React from 'react'

export const Modal = ({ children }) => {

  return (
    <div className="modal">
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  )
}
