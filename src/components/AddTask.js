import React, { useState } from "react";
import "./style/add.css";
import Image from "../logoTodo.png";

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
    <div className="center column gap">
      <div className="inputs">
        <div>
          <p className="">Nome:</p>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div>
          <p>Descrição:</p>
          <textarea
            className="description"
            type=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <></>
        </div>
      </div>
      <button className="buttonAdd" onClick={handleAddTask}>
        Adicionar
      </button>
      <img src={Image} className="image" />
    </div>
  );
};

export default AddTask;
