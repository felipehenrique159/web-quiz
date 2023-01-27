import { createContext, useReducer } from 'react'
import perguntas from '../services/data/questions'

const STAGES = ['start', 'playing', 'end']

const initialStage = {
    gameStage: STAGES[0],
    perguntas,
    perguntaAtual: 0
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
                gameStage: fimDeJogo ? STAGES[2] : state.gameStage
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