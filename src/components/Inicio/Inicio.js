import {useContext} from 'react'
import { QuizContext } from '../../context/quizContext'
import Quiz from '../../assets/quiz.svg'
import './inicio.css'

const Inicio = () => {

    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div id='inicio'>
            <h2>Seja bem-vindo!</h2>
            <p>Clique no botão abaixo para começar</p>
            <button type="button" onClick={() => dispatch({type: 'STATUS_JOGANDO'})}>Iniciar</button>
            <img src={Quiz} alt="" />
        </div>
    )
}

export default Inicio