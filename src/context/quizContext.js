import {createContext, useReducer} from 'react'
import questions from '../services/data/questions'

const STAGES = ['start', 'playing', 'end']

const initialStage = {
    gameStage: STAGES[0],
    questions
}

const quizReducer = (state, action) => {
     switch (action.type) {
        case 'CHANGE_STATE':
            return {
                ...state,
                gameStage: STAGES[1]
            }

        default:
            return state
     }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {

    const value = useReducer(quizReducer, initialStage)

    return <QuizContext.Provider value={value}>
                {children}
            </QuizContext.Provider>
}