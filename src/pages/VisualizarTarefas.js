import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Global.css";

const VisualizarTarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const storedTarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    setTarefas(storedTarefas);
  }, []);

  const handleDeletar = (index) => {
    const updatedTarefas = [...tarefas];
    updatedTarefas.splice(index, 1);
    setTarefas(updatedTarefas);
    localStorage.setItem("tarefas", JSON.stringify(updatedTarefas));
  };

  const handleConcluir = (index) => {
    const updatedTarefas = [...tarefas];
    updatedTarefas[index].concluida = !updatedTarefas[index].concluida;
    setTarefas(updatedTarefas);
    localStorage.setItem("tarefas", JSON.stringify(updatedTarefas));
  };

  return (
    <div className="wall">
      <h1 className="center title">Visualizar Tarefas</h1>
      <div className="cards center column">
        {tarefas.map((tarefa, index) => (
          <div key={index} className="row gap">
            <div className="card column">
              <p>
                <b>{tarefa.nome}</b>
              </p>
              <p>{tarefa.descricao}</p>
            </div>
            <div
              onClick={() => handleConcluir(index)}
              className="button"
              style={{ backgroundColor: tarefa.concluida ? "green" : "red" }}
            >
              Feito
            </div>
            <div onClick={() => handleDeletar(index)} className="button">
              Deletar
            </div>
          </div>
        ))}
      </div>
      <Link to={`/`}>
        <div className="fixed">Adicionar nova tarefa</div>
      </Link>
    </div>
  );
};

export default VisualizarTarefas;
