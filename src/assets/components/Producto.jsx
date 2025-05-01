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
  ]; // Array de productos inicial. Se puede modificar para agregar más productos.

  const boton = document.getElementById("agregarProducto");

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
  /*
  const productosFiltrados = productos.filter(function (producto) {
      return producto.precio > 20;
  });
  */
  const filtrarProductos = () => {
    const productosFiltrados = productos.filter((producto) => producto.precio > 20);

    // Actualizar la lista en el DOM
    const listaFiltrados = document.getElementById("listaProdsFiltrados");
    listaFiltrados.innerHTML = ""; // Limpiar la lista antes de agregar nuevos productos
    productosFiltrados.forEach((producto) => {
      const item = document.createElement("li");
      item.textContent = `ID: ${producto.id}, Producto: ${producto.descripcion} - Precio: $${producto.precio}`;
      listaFiltrados.appendChild(item);
    });

    // se muestra por la consola los productos filtrados
    console.clear();
    console.log("PRODUCTOS CON PRECIO MAYOR A $20:");
    console.log("**************************************************************");
    productosFiltrados.forEach(function (producto) {
      console.log(`ID: ${producto.id}, Producto: ${producto.descripcion}, Precio: $${producto.precio}`);
    });
    console.log("**************************************************************");
  }

  //3.Agrerar el IVA usando map
  // Funcion para aplicar el IVA a los productos
  /*
  const productosConIVA = productos.map(function (producto) {
      return {
          id: producto.id,
          descripcion: producto.descripcion,
          precio: producto.precio * 1.21 // Agregando el IVA del 21%
      };
  });
  */
  const aplicarIVA = () => {
    const productosConIVA = productos.map((producto) => ({
      id: producto.id,
      descripcion: producto.descripcion,
      precio: parseFloat((producto.precio * 1.21).toFixed(2)), // Agregar IVA del 21% y formatear a 2 decimales
    }));

    // Actualizar la lista en el DOM
    const listaIVA = document.getElementById("listaProdsIVA");
    listaIVA.innerHTML = ""; // Limpiar la lista antes de agregar nuevos productos
    productosConIVA.forEach((producto) => {
      const item = document.createElement("li");
      item.textContent = `ID: ${producto.id}, Producto: ${producto.descripcion} - Precio con IVA: $${producto.precio}`;
      listaIVA.appendChild(item);
    });

    // Se muestran en la consola los productos con IVA
    console.clear();
    console.log("PRODUCTOS CON IVA:");
    console.log("**************************************************************");
    productosConIVA.forEach(function (producto) {
      console.log(`ID: ${producto.id}, Producto: ${producto.descripcion}, Precio con IVA: $${producto.precio}`);
    });
    console.log("**************************************************************");
  };



  //4. ordenar el array original de mayor a menor 
  /*
  const productosOrdenados = productos.sort(function (a, b) {
      return a.precio - b.precio;
  });
  */

  // Se crea una funcion para ordenar productos de menor a mayor
  const ordenarProductos = () => {
    const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);

    // Actualizar la lista en el DOM
    const listaOrdenados = document.getElementById("listaProdsOrdenados");
    listaOrdenados.innerHTML = ""; // Limpiar la lista antes de agregar nuevos productos
    productosOrdenados.forEach((producto) => {
      const item = document.createElement("li");
      item.textContent = `ID: ${producto.id}, Producto: ${producto.descripcion} - Precio: $${producto.precio}`;
      listaOrdenados.appendChild(item);
    });

    // Se muestran por consola los productos ordenados
    console.clear();
    console.log("PRODUCTOS ORDENADOS DE MENOR A MAYOR:");
    console.log("**************************************************************");
    productosOrdenados.forEach((producto) => {
      console.log(`ID: ${producto.id}, Producto: ${producto.descripcion}, Precio: $${producto.precio}`);
    });
    console.log("**************************************************************");
  };

  //5. Agregar un nuevo producto al final del array 

  /*
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
  */
  // Agregar un nuevo producto al final del array y mostrarlo en la lista  

  function manejarSubmit(event) {
    event.preventDefault(); // Evitar la recarga del formulario

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;

    // Crear un nuevo producto con un ID único
    const nuevoProd = {
      id: productos.length + 1,
      descripcion: nombre,
      precio: parseFloat(precio),
    };

    // Agregar el nuevo producto al array
    productos.push(nuevoProd);

    // Actualizar la lista en el DOM
    const lista = document.getElementById("listaProds");
    const item = document.createElement("li");
    item.textContent = `ID: ${nuevoProd.id}, Producto: ${nuevoProd.descripcion} - Precio: $${nuevoProd.precio}` // Limpiar la lista antes de agregar nuevos productos
    lista.appendChild(item);

    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";

    // Mostrar en la consola el producto agregado
    console.clear();
    console.log("**************************************************************");
    console.log("PRODUCTO AGREGADO DESPUES DEL ARRAY:");
    productos.forEach(function (producto) {
      console.log(`ID: ${producto.id}, Producto: ${producto.descripcion}, Precio: $${producto.precio}`);
    });
    console.log("**************************************************************");
  }


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

    // Actualizar la lista en el DOM
    const lista = document.getElementById("listaProds");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar los productos restantes
    productos.forEach((producto) => {
      const item = document.createElement("li");
      item.textContent = `ID: ${producto.id}, Producto: ${producto.descripcion} - Precio: $${producto.precio}`;
      lista.appendChild(item);
    });

    // Mostrar el array actualizado en la consola
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
      <form onSubmit={manejarSubmit}>
        <input type="text" id="nombre" placeholder="Nombre" required />
        <input type="number" id="precio" placeholder="Precio" required />
        <button id="btnAgregarProd">Agregar Producto</button>
      </form>

      <button onClick={filtrarProductos}>Filtrar Productos (Precio mayor a $20)</button>
      <button onClick={aplicarIVA}>Aplicar IVA (Se aplica el 21%)</button>
      <button onClick={ordenarProductos}>Ordenar Productos (Menor a Mayor)</button>
      <button onClick={eliminarProducto}>Eliminar Producto de Menor Precio</button>

      <h3>LISTA DE PRODUCTOS</h3>
      <ul id="listaProds">
        {/* Mostrar los productos del array */}
        {productos.map((prod) => (
          <li key={prod.id}>
            ID: {prod.id}, Producto: {prod.descripcion} - Precio: ${prod.precio}
          </li>
        ))}
      </ul>

      <h3>PRODUCTOS CON PRECIO MAYOR A $20</h3>
      <ul id="listaProdsFiltrados"></ul>

      <h3>PRODUCTOS CON IVA</h3>
      <ul id="listaProdsIVA"></ul>

      <h3>PRODUCTOS ORDENADOS DE MENOR A MAYOR</h3>
      <ul id="listaProdsOrdenados"></ul>

    </div>
  );

}
export default Producto;