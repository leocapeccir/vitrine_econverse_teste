import './style.scss'

import tecnologia from './images_seguimentos/monitorar-tablet-e-smartohone 1.png';
import supermercado from './images_seguimentos/supermercados 1.png';
import bebidas from './images_seguimentos/whiskey.png';
import ferramentas from './images_seguimentos/ferramentas 1.png';
import saude from './images_seguimentos/cuidados-de-saude 1.png';
import moda from './images_seguimentos/moda 1.png';
import esporte from './images_seguimentos/corrida 1.png';


function Seguimentos () {

    return (
        <div className="container__seguimentos--promocao">



<div className="container__seguimentos">
<div className="container__seguimentos--tipos">
<img className="icones__seguimentos" src={tecnologia} alt="tecnologia" />
</div>
<span className="tecnologia__descricao descricao__cor--rosa">Tecnologia</span>
</div>


<div className="container__seguimentos">
<div className="container__seguimentos--tipos">
<img className="icones__seguimentos" src={supermercado} alt="supermercado" />
</div>
<span className="descricao">supermercado</span>
</div>


<div className="container__seguimentos">
<div className="container__seguimentos--tipos">
<img className="icones__seguimentos" src={bebidas} alt="bebidas" />
</div>
<span className="descricao">Bebidas</span>
</div>



<div className="container__seguimentos">
<div className="container__seguimentos--tipos">
<img className="icones__seguimentos" src={ferramentas} alt="ferramentas" />
</div>
<span className="descricao">Ferramentas</span>
</div>



<div className="container__seguimentos">
<div className="container__seguimentos--tipos">
<img className="icones__seguimentos" src={saude} alt="saude" />
</div>
<span className="descricao">Saúde</span>
</div>



<div className="container__seguimentos">
<div className="container__seguimentos--tipos">
<img className="icones__seguimentos" src={esporte} alt="esporte" />
</div>
<span className="descricao">Esporte e Fitness</span>
</div>



<div className="container__seguimentos">
<div className="container__seguimentos--tipos">
<img className="icones__seguimentos" src={moda} alt="moda" />
</div>
<span className="descricao">Moda</span>
</div>

</div>





        

    )
}

export default Seguimentos;