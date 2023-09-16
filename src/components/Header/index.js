import './style.scss'
import creditcard from './images_header/CreditCard.png';
import truck from './images_header/Truck.png';
import shieldcheck from './images_header/ShieldCheck.png';
import vtexicon from './images_header/vtexicon.png';
import magnifyingglass from './images_header/MagnifyingGlass.png';
import group from './images_header/Group.png';
import heart from './images_header/Heart.png';
import usercicle from './images_header/UserCircle.png';
import shoppingcart from './images_header/ShoppingCart.png';
import crown from './images_header/CrownSimple.png';




function Header () {
    return(
        <div className="container">
            <div className="container__topo">

                <div className="container__icones">
                <img className="icones" src={shieldcheck} alt="shieldcheck" />
                <span className="span__compra">Compra </span> <p>100% segura</p>
                </div>

                <div className="container__icones">
                <img className="icones" src={truck} alt="truck" />
                <p>Frete grátis</p><span> acima de R$ 200</span>
                
                </div>

                <div className="container__icones">
                <img className="icones" src={creditcard} alt="creditcard" />
                <p>Parcele</p><span> suas compras</span>

                </div>
            </div>

            <div className="container__busca">

            <img className="icone__vtex" src={vtexicon} alt="vtex" />
                
                    <form className="container__form">
                <input type="search" id="campoBusca" placeholder="O que você está buscando?"></input>
                <img className="icone__lupa" src={magnifyingglass} alt="magnifyingglass" />
                    </form>

                    <div className="container__busca--icones">
                    <img className="icones__busca" src={group} alt="group" />
                    <img className="icones__busca" src={heart} alt="heart" />
                    <img className="icones__busca" src={usercicle} alt="usercicle" />
                    <img className="icones__busca" src={shoppingcart} alt="shoppingcart" />
                    </div>
                

            </div>
            
            <div className="container__categorias">
                <span>TODAS AS CATEGORIAS</span>
                <span>SUPERMERCADOS</span>
                <span>LIVROS</span>
                <span>MODA</span>
                <span>LANÇAMENTOS</span>
                <p className="ofertas__dodia">OFERTAS DO DIA</p>
                <div className="icone__coroa">
                <img className="icones" src={crown} alt="crown" />
                <span>ASSINATURA</span>
                </div>

            </div>

        </div>
    )
}

export default Header;