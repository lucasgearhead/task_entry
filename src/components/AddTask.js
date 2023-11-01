import React, { useState } from "react";
import "./style/add.css";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (task !== "") {
      addTask({ task, description, completed: false });
      setTask("");
      setDescription("");
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
