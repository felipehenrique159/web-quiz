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
            <p>Pontuação: {quizState.pontuacao}</p>
            <p>Você acertou {quizState.pontuacao} de {quizState.perguntas.length} perguntas</p>
            <img src={WellDone} alt="Fim do quiz" />
            <button onClick={() => {dispatch({type:'NEW_GAME'})}}>Reiniciar</button>
        </div>
    )
}

export default FimJogo