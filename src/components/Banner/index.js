import './style.scss'

function Banner () {
    
    return (

        <div className="container__banner">
            <div className="container__descricao">
                <span className="banner__descricao--item">Venha conhecer nosas</span>
            </div>

            <span className="container__descricao">promoções</span>

            <div className="banner__desconto">
            <span className="banner__desconto--item">50% Off nos produtos</span>
            </div>
            <button className="botao__banner">Ver produto</button>

            

         </div>
        
    )
}

export default Banner;