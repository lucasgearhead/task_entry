import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./Global.css";

/**
 * Componente principal da aplicação, responsável por gerenciar o estado das tarefas.
 */
const App = () => {
  // Estado para armazenar a lista de tarefas
  const [tasks, setTasks] = useState([]);

  // Efeito para carregar as tarefas salvas no armazenamento local ao iniciar a aplicação
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Efeito para salvar as tarefas no armazenamento local sempre que houver uma mudança no estado 'tasks'
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, 0);
  }, [tasks]);

  // Adiciona uma nova tarefa à lista de tarefas
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Remove uma tarefa da lista com base no índice
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Altera o status de conclusão de uma tarefa com base no índice
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="wall row">
      <div className="aside">
        <h1 className="center titleAside">Adicionar Tarefa</h1>
        {/* Componente para adicionar novas tarefas */}
        <AddTask addTask={addTask} />
      </div>
      <div className="content column auto">
        <h1 className="center titleContent">Tarefas</h1>
        {/* Componente para exibir a lista de tarefas */}
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};

export default App;
