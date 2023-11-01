import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdicionarTarefa from "./pages/AdicionarTarefa";
import VisualizarTarefas from "./pages/VisualizarTarefas";
import "./Global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdicionarTarefa />} />
        <Route path="/tarefas" element={<VisualizarTarefas />} />
      </Routes>
    </Router>
  );
}

export default App;
