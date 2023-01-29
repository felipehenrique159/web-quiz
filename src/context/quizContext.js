import { createContext, useReducer } from 'react'

const STAGES = ['start', 'playing', 'end']
let perguntas = {}

const initialStage = {
    gameStage: STAGES[0],
    perguntas,
    perguntaAtual: 0,
    pontuacao: 0,
    respostaSelecionada: false
}

const quizReducer = (state, action) => {
    switch (action.type) {
        case 'STATUS_JOGANDO':
            return {
                ...state,
                gameStage: STAGES[1]
            }
        case 'SORTEAR_PERGUNTAS':
            const perguntasReordenadas = initialStage.perguntas.sort(() => {
                return Math.random() - 0.5;
            })

            return {
                ...state,
                perguntas: perguntasReordenadas
            }

        case 'PROXIMA_PERGUNTA':
            const proximaPergunta = state.perguntaAtual + 1
            let fimDeJogo = false

            if (!initialStage.perguntas[proximaPergunta]) {
                fimDeJogo = true
            }

            return {
                ...state,
                perguntaAtual: proximaPergunta,
                gameStage: fimDeJogo ? STAGES[2] : state.gameStage,
                respostaSelecionada: false
            }
        case 'NOVO_JOGO':
            return initialStage

        case 'VERIFICAR_RESPOSTA':

            if (state.respostaSelecionada) {
                return state
            }

            const resposta = action.payload.opcaoSelecionada
            const respostaCerta = action.payload.respostaCorreta
            let respostaCorretaFlag = 0;

            if (respostaCerta) {
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