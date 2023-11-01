import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdicionarTarefa = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleAdicionar = () => {
    const novaTarefa = { nome, descricao, concluida: false };

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.push(novaTarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  };

  return (
    <div>
      <div>
        <h2>Adicionar Tarefa</h2>
        <p>Nome:</p>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <p>Descrição:</p>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </div>
      <button onClick={handleAdicionar}>Adicionar</button>
      <div>
        <Link to={"/tarefas"}>
          <button>Visualizar tarefas</button>
        </Link>
      </div>
    </div>
  );
};

export default AdicionarTarefa;
