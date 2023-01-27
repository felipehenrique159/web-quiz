import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../../context/quizContext'
import './fimJogo.css'
import WellDone from '../../assets/welldone.svg'

const FimJogo = () => {

    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div id='fimDeJogo'>
            <h2>Fim de jogo</h2>
            <p>Pontuação: x</p>
            <p>Você acertou x de z perguntas</p>
            <img src={WellDone} alt="Fim do quiz" />
            <button>Reiniciar</button>
        </div>
    )
}

export default FimJogo