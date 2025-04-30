import { useState } from "react";
import "./TaskItem.css";

export default function TaskItem({ title, onDelete }) {
  const [done, setDone] = useState(false);

  const toggleDone = () => {
    setDone(!done);
  };

  return (
    <li className={done ? "rayada" : "normal"}>
      {title}
      <div>
        <button onClick={toggleDone}>
          {done ? "Rehacer" : "Realizar"}
        </button>
        <button onClick={onDelete}>Eliminar</button>
      </div>
    </li>
  );
}
