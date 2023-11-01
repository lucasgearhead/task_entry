import AdicionarTarefa from "./pages/AdicionarTarefa";
import VisualizarTarefas from "./pages/VisualizarTarefas";
import "./Global.css";

function App() {
  return (
    <div className="wall row">
      <div className="aside">
        <h1 className="center title">Adicionar Tarefa</h1>
        <AdicionarTarefa />
      </div>
      <div className="column center">
        <h1 className="center title">Tarefas</h1>
        <VisualizarTarefas />
      </div>
    </div>
  );
}

export default App;
