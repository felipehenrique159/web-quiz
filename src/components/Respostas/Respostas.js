import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../../context/quizContext'
import './respostas.css'

const Respostas = ({resposta, answer, selectOption}) => {

    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div className={`resposta
            ${quizState.respostaSelecionada && resposta === answer ? 'correta' : ''}
            ${quizState.respostaSelecionada && resposta !== answer ? 'errada' : ''}`}
            onClick={() => selectOption()}>
            <p>{resposta}</p>
        </div>
    )
}

export default Respostas