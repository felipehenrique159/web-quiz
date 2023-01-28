import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../../context/quizContext'
import '../Perguntas/perguntas.css'
import Respostas from '../Respostas/Respostas'

const Perguntas = () => {

    const [quizState, dispatch] = useContext(QuizContext)
    const perguntaAtual = quizState.perguntas[quizState.perguntaAtual]

    const onSelectOption = (resposta) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: {
                respostaCorreta: perguntaAtual.answer,
                opcaoSelecionada: resposta
            }
        })
    }

    return (
        <div id="pergunta">
            <p>Pergunta {quizState.perguntaAtual + 1} de {quizState.perguntas.length}</p>
            <h2>{perguntaAtual.question}</h2>
            <div id="options-container">
                {perguntaAtual.options.map((resposta) => (
                    <Respostas
                        resposta={resposta}
                        key={resposta}
                        answer={perguntaAtual.answer}
                        selectOption={() => onSelectOption(resposta)}
                        />
                ))}
            </div>
            {quizState.respostaSelecionada && (
                <button onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}>Continuar</button>
            )}
        </div>
    )
}

export default Perguntas