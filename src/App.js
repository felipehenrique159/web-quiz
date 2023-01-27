import './css/index.css'
import './css/app.css'
import Inicio from './components/Inicio/Inicio'
import { useContext } from 'react';
import Perguntas from './components/Perguntas/Perguntas';
import { QuizContext } from './context/quizContext';

function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className="app">
      <h1>Quiz</h1>
      {quizState.gameStage == 'start' && <Inicio/>}
      {quizState.gameStage == 'playing' && <Perguntas/>}

    </div>
  );
}

export default App;
