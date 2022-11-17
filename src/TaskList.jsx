import { tasks } from "./tasks";
import { useState, useEffect } from "react";

console.log(tasks);

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasks);
  }, []);

  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }

  return (
    <div>
      {tasks.map((tasks) => (
        <div>tarea</div>
      ))}
    </div>
  );
}

export default TaskList;
