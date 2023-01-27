import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../../context/quizContext'
import '../Perguntas/perguntas.css'

const Perguntas = () => {

    const [quizState, dispatch] = useContext(QuizContext)
    const perguntaAtual = quizState.perguntas[quizState.perguntaAtual]

    return (
        <div id="pergunta">
            <p>Pergunta {quizState.perguntaAtual + 1} de {quizState.perguntas.length}</p>
            <h2>{perguntaAtual.question}</h2>
            <div id="options-container">
                <p>Opções</p>
            </div>
            <button onClick={() => dispatch({type: 'CHANGE_QUESTION'})}>Continuar</button>
        </div>
    )
}

export default Perguntas