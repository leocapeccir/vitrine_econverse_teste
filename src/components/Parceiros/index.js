import './style.scss'


function Parceiros ( ) {
    
    return (
        <div className='container'>

            <div className="container__parceiros">
            <div className='container__parceiros--banner'>
                <div className='parceiros__descricao'>
                   <span className='descricao__titulo'>Parceiros</span>
                   <span className='descricao__subtitulo'>Lorem ipsum dolor sit amet, consectetur</span>
                    <button className='botao__parceiros'>CONFIRA</button>
                </div>
            </div>
            
            <div className='container__parceiros--banner'>
                <div className='parceiros__descricao'>
                   <span className='descricao__titulo'>Parceiros</span>
                   <span className='descricao__subtitulo'>Lorem ipsum dolor sit amet, consectetur</span>
                    <button className='botao__parceiros'>CONFIRA</button>
                </div>
            </div>
            </div>

            <div className="container__produtos--relacionados">
        <div className="container__relacionados--borda"></div>
        <span className="titulo__relacionados">Produtos relacionados</span>
        <div className="container__relacionados--borda"></div>
      </div>
        <span className="descricao__vertodos">ver todos</span>
        </div>
    )
}

export default Parceiros;