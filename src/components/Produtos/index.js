import './style.scss'
import vtexmarca from './images_produtos/Group 405.png';
import seta from './images_produtos/next.png';



function Produtos ( ) {
    
    return (
        <div className='container'>

            <div className="container__produtos">
            <div className='container__produtos--banner'>
                <div className='produtos__descricao'>
                   <span className='descricao__titulo'>Produtos</span>
                   <span className='descricao__subtitulo'>Lorem ipsum dolor sit amet, consectetur</span>
                    <button className='botao__produtos'>CONFIRA</button>
                </div>
            </div>
            
            <div className='container__produtos--banner'>
                <div className='produtos__descricao'>
                   <span className='descricao__titulo'>Produtos</span>
                   <span className='descricao__subtitulo'>Lorem ipsum dolor sit amet, consectetur</span>
                    <button className='botao__produtos'>CONFIRA</button>
                </div>
            </div>
            </div>

                <span className="container__titulo--marcas">Navegue por marcas</span>
            <div className="container__navegue--marcas">
                <div className='container__itens'>
                    
                        <div className="container__alinha--marcas">
                        <div className="container__redondo">
                        <img className="vtex__marca" src={vtexmarca} alt="vtexmarca" />
                        </div>     
                        <div className="container__redondo">
                        <img className="vtex__marca" src={vtexmarca} alt="vtexmarca" />
                        </div>   
                        <div className="container__redondo">
                        <img className="vtex__marca" src={vtexmarca} alt="vtexmarca" />
                        </div> 
                          
                        <div className="container__redondo">
                        <img className="vtex__marca" src={vtexmarca} alt="vtexmarca" />
                        </div>
                        
                        <div className="container__redondo">
                        <img className="vtex__marca" src={vtexmarca} alt="vtexmarca" />
                        
                        <img className="seta__marcas" src={seta} alt="vtexmarcaseta" />
                        </div>                 
                        
                        </div>
                </div>

            </div>

        </div>
    )
}

export default Produtos;