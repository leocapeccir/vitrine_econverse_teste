import React from 'react';
import './style.scss';

function Modal({ onClose, product }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal__overlay" onClick={handleOverlayClick}>
      <div className="container__modal">
        <button className="modal__close-button" onClick={onClose}>
          X
        </button>
        {product && (
          <>
            <div className="container__modal--imagem">
              <img className="teste__imagem" src={product.photo} alt={product.productName} />
            </div>
            <div className="container__modal--descricoes">
              <span className="descricao__modal">{product.productName}</span>
              <span className="descricao__modal">{product.price}</span>
              <span className="descricao__modal--desktop">{product.descriptionShort}</span>
              <span className="descricao__modal--detalhes">Veja mais detalhes do produto {'>'}</span>
              <div className="container__adicionar--remover">
                <span className="descricao__remover--adicionar">-</span>
                <span className="descricao__remover--adicionar">1</span>
                <span className="descricao__remover--adicionar">+</span>
              </div>
              <div className="botao__modal--container">
                <button className="botao__modal">Comprar</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
