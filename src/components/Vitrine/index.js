import React, { useState, useEffect } from 'react';
import './style.scss';
import setaesquerda from './images_vitrine/setaEsquerda.png';
import setadireita from './images_vitrine/setaDireita.png';
import Modal from '../Modal';

function Vitrine() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [produtos, setProdutos] = useState([]);

  const handleComprarClick = (produto) => {
    setSelectedProduct(produto);
    setIsModalVisible(true);
  };

  useEffect(() => {
    fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
      .then((response) => response.json())
      .then((data) => setProdutos(data.products))
      .catch((error) => console.error('Erro ao buscar dados da API:', error));
  }, []);

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedProduct(null);
  };

  return (
    <div className="container__vitrine">
      <div className="container__produtos--relacionados">
        <div className="container__relacionados--borda"></div>
        <span className="titulo__relacionados">Produtos relacionados</span>
        <div className="container__relacionados--borda"></div>
      </div>
      <div className="categoria__vitrine">
        <span className="categoria__vitrine--titulo categoria__vitrine--titulo-rosa">CELULAR</span>
        <span className="categoria__vitrine--titulo">ACESSÓRIOS</span>
        <span className="categoria__vitrine--titulo">TABLETS</span>
        <span className="categoria__vitrine--titulo">NOTEBOOKS</span>
        <span className="categoria__vitrine--titulo">TVS</span>
        <span className="categoria__vitrine--titulo">VER TODOS</span>
      </div>
      <div className="main__vitrine">
        <div className="container__setas">
          <img className="icone__seta--esquerda seta" src={setaesquerda} alt="setaesquerda" />
        </div>
        <div className="vitrine__define--largura">
          <div className="vitrine">
            {produtos.map((produto) => (
              <div className="container__vitrine---produtos" key={produto.productId}>
                <div className="produto">
                  <div className="imagem__produto">
                    <img className="teste__imagem" src={produto.photo} alt={produto.productName} />
                  </div>
                  <div className="container__descricao--preco">
                    <div className="descricao__produto">
                      <span>{produto.productName}</span>
                    </div>
                    <div className="descricao__preco--antigo">
                      <span>R$ 600,00</span>
                    </div>
                    <div className="descricao__preco--atual">
                      <span>{produto.price}</span>
                    </div>
                    <div className="descricao__parcelamento">
                      <span>ou 2x de R$ 49,95 sem juros</span>
                    </div>
                    <div className="descricao__frete">
                      <span>Frete Grátis</span>
                    </div>
                  </div>
                  <div className="container__botao">
                    <button onClick={() => handleComprarClick(produto)} className="botao__vitrine">
                      COMPRAR
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container__setas">
          <img className="icone__seta--direita seta" src={setadireita} alt="setadireita" />
        </div>
      </div>
      {isModalVisible && <Modal product={selectedProduct} onClose={handleCloseModal} />}
    </div>
  );
}

export default Vitrine;
