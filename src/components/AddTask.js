import React, { useState } from "react";
import "./style/add.css";

/*
const AdicionarTarefa = ({ addTask }) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleAdicionar = () => {
    const novaTarefa = { nome, descricao, concluida: false };

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.push(novaTarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    setNome("");
    setDescricao("");
  };
*/

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (task !== '') {
      addTask({ task, description, completed: false });
      setTask('');
      setDescription('');
    }
  };

  return (
    <div className="center column">
      <div>
        <p>Nome:</p>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div>
        <p>Descrição:</p>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button onClick={handleAddTask}>Adicionar</button>
    </div>
  );
};

export default AddTask;
