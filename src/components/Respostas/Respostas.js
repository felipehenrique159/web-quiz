import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../../context/quizContext'
import './respostas.css'

const Respostas = ({ resposta, flagRespostaCerta, selectOption }) => {

    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <div className={`resposta
            ${quizState.respostaSelecionada && flagRespostaCerta === 1 ? 'correta' : ''}
            ${quizState.respostaSelecionada && flagRespostaCerta === 0 ? 'errada' : ''}`}
            onClick={() => selectOption()}>
            <p>{resposta}</p>
        </div>
    )
}

export default Respostas