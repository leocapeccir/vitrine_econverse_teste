import './style.scss'
import facebook from './images_footer/023-facebook.png';
import instagram from './images_footer/044-instagram.png';
import youtube from './images_footer/116-youtube.png';
import mastercard from './images_footer/mastercard.png';
import alelo from './images_footer/alelo.png';
import pix from './images_footer/pix.png';
import elo from './images_footer/elo.png';
import amex from './images_footer/amex.png';
import dinners from './images_footer/dinners.png';
import ifood from './images_footer/ifood.png';
import sodexo from './images_footer/sodexo.png';
import ticket from './images_footer/ticket.png';
import visa from './images_footer/Group 1351.png';


function Footer () {
    return (
        <div className="container__footer">

                    <div className="container__sobre">

                         
                        <span className="descricao__sobre--titulo">Sobre nós</span>
                       

                        <div className="container__sobre--texto">
                            <div>
                        <span className="descricao__sobre--texto">CONHEÇA   </span>
                            </div>
                            <div>
                        <span className="descricao__sobre--texto">COMO COMPRAR   </span>
                            </div>
                            <div>
                        <span className="descricao__sobre--texto"> INDICAÇÃO  E  DESCONTO </span>
                            </div>
                        </div>

                        <div className="container__icones--redessociais">
                        <img className="icone__rede--social" src={facebook} alt="icones-redes-sociais" />
                        <img className="icone__rede--social" src={instagram} alt="icones-redes-sociais" />
                        <img className="icone__rede--social" src={youtube} alt="icones-redes-sociais" />
                        </div>
                    </div>


                    <div className="container__sobre">

                         
                        <span className="descricao__info--titulo">INFORMAÇÕES</span>
                       

                        <div className="container__info--texto">
                            
                        <div><span className="descricao__info--texto">FALE CONOSCOO</span></div>
                        <div><span className="descricao__info--texto">DÚVIDAS</span></div>
                        <div><span className="descricao__info--texto">PRAZOS DE ENTREGA</span></div>
                        <div><span className="descricao__info--texto">FORMAS DE PAGAMENTO</span></div>
                        <div><span className="descricao__info--texto">POLÍTICA DE PRIVACIDADE</span></div>
                        <div><span className="descricao__info--texto">TROCAS E DEVOLUÇÕES</span></div>


                        </div>

                        
                    </div>
            
                    <div className="container__formas__de--pagamento">
                    <div className="container__formas--pagamento">
                    <div className="container__titulo--pagamento">
                    <span className="formas__pagamento--titulo">FORMAS DE PAGAMENTO</span>
                        </div>  
                    <div className="container__formas--pagamento-item">

                    
                        <div className="alinha__vertical">
                        <div className="container__icones--pagamento">
                        <img className="icone__rede--social" src={visa} alt="icones-redes-sociais" />
                        </div>

                        <div className="container__icones--pagamento">
                        <img className="icone__rede--social" src={dinners} alt="icones-redes-sociais" />
                        </div>

                        <div className="container__icones--pagamento">
                        <img className="icone__rede--social" src={pix} alt="icones-redes-sociais" />
                        </div>
                        
                        <div className="container__icones--pagamento">
                        <img className="icone__rede--social" src={sodexo} alt="icones-redes-sociais" />
                        </div>
                        </div>

                        <div className="alinha__vertical">
                        <div className="container__icones--pagamento">
                        <img className="icone__rede--social" src={elo} alt="icones-redes-sociais" />
                        </div>
                        
                        <div className="container__icones--pagamento">
                        <img className="icone__rede--social" src={ifood} alt="icones-redes-sociais" />
                        </div>
                        <div className="container__icones--pagamento">
                        <img className="icone__rede--social" src={amex} alt="icones-redes-sociais" />
                        </div>
                        </div>
                        
                        <div className="alinha__vertical">
                        <div className="container__icones--pagamento">
                        <img className="icone__rede--social" src={alelo} alt="icones-redes-sociais" />
                        </div>
                        <div className="container__icones--pagamento">
                        <img className="icone__rede--social" src={mastercard} alt="icones-redes-sociais" />
                        </div>
                        <div className="container__icones--pagamento">
                        <img className="icone__rede--social" src={ticket} alt="icones-redes-sociais" />
                        </div>
                        </div>
                        
                    </div>

                    
                    </div>

                    
                    </div>
                    
                    


                    <div className="container__email">
                        <div className="container__email--titulo">
                            <div>
                            <span className="descricao__email">CADASTRE-SE E RECEBA NOSSAS</span> </div>
                            <div>
                            <span className="descricao__email--negrito">NOVIDADES E PROMOÇÕES</span></div>

                        </div>
                        <span className="descricao__container--email">Excepteur sint occaecat cudatat non ent, snt in culpa qui officia lorem ipsum</span>

                        <div className="alinha__container--email">
                        <div className="input__container--email">
                        <input type="search" id="campobuscaemail" placeholder="SEU E-MAIL"></input>
                        </div>
                        <div className="container__botao--email">
                        <button className='botao__email'>OK</button>
                        </div>
                        </div>
                    </div>
    
            </div>


       
    )
}

export default Footer;