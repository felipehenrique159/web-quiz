import './css/index.css'
import './css/app.css'
import Inicio from './components/Inicio/Inicio'
import { useContext, useEffect } from 'react';
import Perguntas from './components/Perguntas/Perguntas';
import { QuizContext } from './context/quizContext';
import FimJogo from './components/FimJogo/FimJogo';
import api from './services/Api'

function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  async function getPerguntas() {
    return await api.get('/perguntas')
  }

  useEffect(() => {

    const getPerguntasApi = async () => {
      const perguntasApi = await getPerguntas();
      quizState.perguntas = perguntasApi.data
      dispatch({ type: 'SORTEAR_PERGUNTAS' })
    };

    getPerguntasApi()

  }, [])

  return (
    <div className="app">
      <h1>Quiz</h1>
      {quizState.gameStage === 'start' && <Inicio />}
      {quizState.gameStage === 'playing' && <Perguntas />}
      {quizState.gameStage === 'end' && <FimJogo />}

    </div>
  );
}

export default App;
