import { useState } from 'react';

const Tarea = () => {
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState('');

  const agregarTarea = (e) => {
    e.preventDefault();
    if (texto.trim() !== '') {
      setTareas([{ id: Date.now(), texto, completada: false }, ...tareas]);
      setTexto('');
    }
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  const completarTarea = (id) => {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  return (
    <div className="tareas">
      <h2>Listado de Tareas</h2>
      <form onSubmit={agregarTarea}>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe una tarea"
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tareas.map(t => (
          <li key={t.id} style={{ textDecoration: t.completada ? 'line-through' : 'none' }}>
            {t.texto}
            <button onClick={() => completarTarea(t.id)}>✓</button>
            <button onClick={() => eliminarTarea(t.id)}>✗</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tarea;
