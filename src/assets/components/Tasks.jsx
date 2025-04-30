import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import { useState } from "react";
import "../CSS/Tasks.css";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  function addTask(title) {
    if (title.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: title,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return (
    <>
      <h1>Lista de Tareas</h1>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </>
  );
}

export default Tasks;
