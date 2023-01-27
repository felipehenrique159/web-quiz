import Quiz from '../assets/quiz.svg'
import './inicio.css'

const Inicio = () => {
    return (
        <div id='inicio'>
            <h2>Seja bem-vindo!</h2>
            <p>Clique no botão abaixo para começar</p>
            <button type="button">Iniciar</button>
            <img src={Quiz} alt="" />
        </div>
    )
}

export default Inicio