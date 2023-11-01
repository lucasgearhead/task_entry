import React, { useState, useEffect } from "react";
import "../Global.css";

const VisualizarTarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const storedTarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    setTarefas(storedTarefas);
  }, [tarefas]);

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
    <div className="cards center column">
      {tarefas.map((tarefa, index) => (
        <div key={index} className="row gap">
          <div className="card column">
            <p>
              <b>{tarefa.nome}</b>
            </p>
            <p>{tarefa.descricao}</p>
          </div>
          <div className="column buttons gap">
            <div
              onClick={() => handleConcluir(index)}
              className="button"
              onSelect={false}
              style={{
                backgroundColor: tarefa.concluida ? "green" : "red",
              }}
            >
              Feito
            </div>
            <div onClick={() => handleDeletar(index)} className="button">
              Deletar
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisualizarTarefas;
