import React, { useState } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');


  function agregarTarea(e) {
    e.preventDefault();  

    if (nombre === '' || descripcion === '' || fecha === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

   
    const nuevaTarea = { nombre, descripcion, fecha };

  
    setTareas([...tareas, nuevaTarea]);

 
    setNombre('');
    setDescripcion('');
    setFecha('');
  }

  return (
    <div>
      <h1>Lista de Tareas TO DO</h1>

      <form onSubmit={agregarTarea}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre de la tarea"
          />
        </div>
        
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripción de la tarea"
          />
        </div>

        <div>
          <label>Fecha:</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <button type="submit">Agregar Tarea</button>
      </form>

      <h3>Tareas</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map(function (t, i) {
            return (
              <tr key={i}>
                <td>{t.nombre}</td>
                <td>{t.descripcion}</td>
                <td>{t.fecha}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListaTareas;
