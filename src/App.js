import './css/index.css'
import './css/app.css'
import Inicio from './components/Inicio/Inicio'
import { useContext, useEffect } from 'react';
import Perguntas from './components/Perguntas/Perguntas';
import { QuizContext } from './context/quizContext';
import FimJogo from './components/FimJogo/FimJogo';

function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({type: 'REODER_QUESTIONS'})
  }, [])

  return (
    <div className="app">
      <h1>Quiz</h1>
      {quizState.gameStage == 'start' && <Inicio/>}
      {quizState.gameStage == 'playing' && <Perguntas/>}
      {quizState.gameStage == 'end' && <FimJogo/>}

    </div>
  );
}

export default App;
