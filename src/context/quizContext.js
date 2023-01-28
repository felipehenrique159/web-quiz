import { createContext, useReducer } from 'react'
import perguntas from '../services/data/questions'

const STAGES = ['start', 'playing', 'end']

const initialStage = {
    gameStage: STAGES[0],
    perguntas,
    perguntaAtual: 0,
    pontuacao: 0,
    respostaSelecionada: false
}

const quizReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_STATE':
            return {
                ...state,
                gameStage: STAGES[1]
            }
        case 'REODER_QUESTIONS':
            const perguntasReordenadas = perguntas.sort(() => {
                return Math.random() - 0.5;
            })

            return {
                ...state,
                perguntas: perguntasReordenadas
            }

        case 'CHANGE_QUESTION':
            const proximaPergunta = state.perguntaAtual + 1
            let fimDeJogo = false

            if (!perguntas[proximaPergunta]) {
                fimDeJogo = true
            }

            return {
                ...state,
                perguntaAtual: proximaPergunta,
                gameStage: fimDeJogo ? STAGES[2] : state.gameStage,
                respostaSelecionada: false
            }
        case 'NEW_GAME':
            return initialStage

        case 'CHECK_ANSWER':

            if (state.respostaSelecionada) {
                return state
            }

            const resposta = action.payload.opcaoSelecionada
            const respostaCerta = action.payload.respostaCorreta
            let respostaCorretaFlag = 0;

            if (resposta == respostaCerta) {
                respostaCorretaFlag = 1;
            }

            return {
                ...state,
                pontuacao: state.pontuacao + respostaCorretaFlag,
                respostaSelecionada: resposta
            }

        default:
            return state
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {

    const value = useReducer(quizReducer, initialStage)

    return <QuizContext.Provider value={value}>
        {children}
    </QuizContext.Provider>
}