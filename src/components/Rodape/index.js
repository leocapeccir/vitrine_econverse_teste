import './style.scss';
import econversevtex from './images_rodape/Group 831.png';

function Rodape () {
    return (

        <div className="container__footer--base">

        <div className="container__footer--descricao-base">
        <span className="footer__descricao--base">Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</span>
        </div>
        
<div className="container__icone--esconverse">
<img className="icone__econverse" src={econversevtex} alt="icones-redes-sociais" />
</div>
        </div>

    )
}

export default Rodape;