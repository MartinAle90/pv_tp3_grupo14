import { useState } from "react";

export default function TaskInput({ onAdd }) {
  const [inputValue, setinputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(inputValue);
    setinputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ej: Sacar la basura"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      />

      <button>Crear tarea</button>
    </form>
  );
}
