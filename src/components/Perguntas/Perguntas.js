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
            type: "VERIFICAR_RESPOSTA",
            payload: {
                respostaCorreta: resposta.resposta_certa,
                opcaoSelecionada: resposta.resposta
            }
        })
    }

    return (
        <div id="pergunta">
            <p>Pergunta {quizState.perguntaAtual + 1} de {quizState.perguntas.length}</p>
            <h2>{perguntaAtual.pergunta}</h2>
            <div id="options-container">
                {perguntaAtual.respostasPergunta.map((resposta) => (
                    <Respostas
                        resposta={resposta.resposta}
                        key={resposta.resposta}
                        flagRespostaCerta={resposta.resposta_certa}
                        selectOption={() => onSelectOption(resposta)}
                    />
                ))}
            </div>
            {quizState.respostaSelecionada && (
                <button onClick={() => dispatch({ type: 'PROXIMA_PERGUNTA' })}>Continuar</button>
            )}
        </div>
    )
}

export default Perguntas