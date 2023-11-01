import "./style/view.css";

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <div className="cards center column">
      {tasks.map((task, index) => (
        <div key={index} className="row gap">
          <div className="card column">
            <p>
              <b>{task.task}</b>
            </p>
            <p>{task.description}</p>
          </div>
          <div className="column buttons gap">
            <div
              onClick={() => toggleComplete(index)}
              className="button"
              style={{
                backgroundColor: task.completed ? "green" : "red",
              }}
            >
              Feito
            </div>
            <div onClick={() => deleteTask(index)} className="button">
              Deletar
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
