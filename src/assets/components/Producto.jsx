function Producto() {
  let productos = [
    { id: 1, descripcion: "Auriculares", precio: 12 },
    { id: 2, descripcion: "Mouse", precio: 15000 },
    { id: 3, descripcion: "Teclado", precio: 20000 },
    { id: 4, descripcion: "Monitor", precio: 19 },
    { id: 5, descripcion: "CPU", precio: 120000 },
    { id: 6, descripcion: "Placa de video", precio: 100000 },
    { id: 7, descripcion: "Placa madre", precio: 50000 },
    { id: 8, descripcion: "Memoria RAM", precio: 15 },
    { id: 9, descripcion: "Disco Duro", precio: 5 },
    { id: 10, descripcion: "Fuente de poder", precio: 20000 }
  ];

  
  //1.Mostrar cada producto por consola
  console.clear(); // Limpia la consola antes de mostrar los productos. Ya que al momento de ordenar se llenaba la consola
  console.log("**************************************************************");
  console.log("LISTA DE PRODUCTOS:");
  console.log("**************************************************************");
  productos.forEach(function (producto) {
    console.log(`ID: ${producto.id}, Producto: ${producto.descripcion}, Precio:$${producto.precio}`);
  });
  console.log("**************************************************************");

  //2.Filtro de productos sean mayor a $20
  const productosFiltrados = productos.filter(function (producto) {
    return producto.precio > 20;
  });

  console.log("PRODUCTOS CON PRECIO MAYOR A $20:");
  console.log("**************************************************************");
  productosFiltrados.forEach(function (producto) {
    console.log(`ID: ${producto.id}, Producto: ${producto.descripcion}, Precio: $${producto.precio}`);
  });
  console.log("**************************************************************");

  //3.Agrerar el IVA usando map
  const productosConIVA = productos.map(function (producto) {
    return {
      id: producto.id,
      descripcion: producto.descripcion,
      precio: producto.precio * 1.21 // Agregando el IVA del 21%
    };
  });

  console.log("PRODUCTOS CON IVA:");
  console.log("**************************************************************");
  productosConIVA.forEach(function (producto) {
    console.log(`ID: ${producto.id}, Producto: ${producto.descripcion}, Precio con IVA: $${producto.precio}`);
  });
  console.log("**************************************************************");

  //4. ordenar el array original de mayor a menor 
  const productosOrdenados = productos.sort(function (a, b) {
    return a.precio - b.precio;
  });

  console.log("PRODUCTOS ORDENADOS DE MEN A MAY:");
  console.log("**************************************************************");
  productosOrdenados.forEach(function (producto) {
    console.log(`ID: ${producto.id}, Producto: ${producto.descripcion}, Precio: $${producto.precio}`);
  });
  console.log("**************************************************************");

  //5. Agregar un nuevo producto al final del array 
  const agregarProducto = () => {
    console.clear();
    console.log("**************************************************************");
    productos.push({ id: productos.length + 1, descripcion: "Cargador Portatil", precio: 100 }); // Agrega el producto al final del array
    console.log("PRODUCTO AGREGADO DESPUES DEL ARRAY:");
    productos.forEach(function (producto) {
      console.log(`ID: ${producto.id}, Producto: ${producto.descripcion}, Precio: $${producto.precio}`);
    });
    console.log("**************************************************************");
  };

  //6. Eliminar el producto con el precio mas bajo del array y mostrar como queda el array
  const eliminarProducto = () => {
    if (productos.length === 0) {
      console.log("NO HAY PRODUCTOS PARA ELIMIMAR");
      return;
    }

    // Primero se encuentra el producto con el precio mas bajo
    const prodPrecBajo = productos.reduce((min, producto) =>
      producto.precio < min.precio ? producto : min
    );

    // Filtrar el producto con el precio más bajo
    productos = productos.filter(
      (producto) => producto.id !== prodPrecBajo.id
    );

    // Mostrar en la consola el producto eliminado
    console.clear();
    console.log("**************************************************************");
    console.log("PRODUCTO ELIMINADO:");
    console.log(`ID: ${prodPrecBajo.id}, Producto: ${prodPrecBajo.descripcion}, Precio: $${prodPrecBajo.precio}`);
    console.log("**************************************************************");

    // Mostrar el array actualizado en el formato deseado
    console.log("LISTA PRODUCTOS ACTUALIZADA");
    console.log("**************************************************************");
    productos.forEach((producto) => {
      console.log(`ID: ${producto.id}, Producto: ${producto.descripcion}, Precio: $${producto.precio}`);
    });
    console.log("**************************************************************");
  };

  // En este parte empieza el renderizado del componente. Es decir el HTML que se va a mostrar en la pantalla.
  // En React, el renderizado se hace a través de JSX, que es una sintaxis similar a HTML.
  return (
    <div>
      <h1>Productos</h1>
      <button onClick={agregarProducto}>Agregar Producto</button>
      <button onClick={eliminarProducto}>Eliminar Producto</button>
      <h3>LISTA DE PRODUCTOS</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.descripcion}</td>
              <td>$ {prod.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>PRODUCTOS CON PRECIO MAYOR A $20</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.map((prodF) => (
            <tr key={prodF.id}>
              <td>{prodF.id}</td>
              <td>{prodF.descripcion}</td>
              <td>$ {prodF.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>PRODUCTOS CON IVA</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productosConIVA.map((prodIva) => (
            <tr key={prodIva.id}>
              <td>{prodIva.id}</td>
              <td>{prodIva.descripcion}</td>
              <td>$ {prodIva.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>PRODUCTOS ORDENADOS DE MENOR A MAYOR</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productosOrdenados.map((prodO) => (
            <tr key={prodO.id}>
              <td>{prodO.id}</td>
              <td>{prodO.descripcion}</td>
              <td>$ {prodO.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );

}
export default Producto;