function ArrayObjetos() {
    const productos = [
      { descripcion: "Auriculares", precio: 12 },
      { descripcion: "Mouse", precio: 15000 },
      { descripcion: "Teclado", precio: 20000 },
      { descripcion: "Monitor", precio: 19 },
      { descripcion: "CPU", precio: 120000 },
      { descripcion: "Placa de video", precio: 100000 },
      { descripcion: "Placa madre", precio: 50000 },
      { descripcion: "Memoria RAM", precio: 15 },
      { descripcion: "Disco Duro", precio: 5 },
      { descripcion: "Fuente de poder", precio: 20000 }
    ];

//4. ordenar el array original de mayor a menor 
    productos.sort(function(a, b) {
      return a.precio - b.precio;
    });
    
  //1.Mostrar cada producto por consola 
    productos.forEach(function(producto) {
      console.log(`Producto: ${producto.descripcion}, Precio:$${producto.precio}`);
    }); 

//2.Filtro de productos sean mayor a $20
const productosFiltrados = productos.filter(function(producto) {
    return producto.precio > 20;

  });

  console.log("PRODUCTOS CON PRECIO MAYOR A $20:");
  productosFiltrados.forEach(function(producto) {
    console.log(`Producto: ${producto.descripcion}, Precio: $${producto.precio}`);
  });

//3.Agrerar el IVA usando map
const productosConIVA = productos.map(function(producto) {
    return {
      descripcion: producto.descripcion,
      precio: producto.precio * 1.21 // Agregando el IVA del 21%
    };
  });

  console.log("PRODUCTOS CON IVA:");
  productosConIVA.forEach(function(producto) {
    console.log(`Producto: ${producto.descripcion}, Precio con IVA: $${producto.precio}`);
  });

//5. Agregar un nuevo producto al final del array 
  productos.push({ descripcion: "Cargador Portatil", precio: 100 });
  console.log("PRODUCTO AGREGADO DESPUES DEL ARRAY:");
  productos.forEach(function(producto) {
    console.log(`Producto: ${producto.descripcion}, Precio: $${producto.precio}`);
  });

  //6. Eliminar el producto con el precio mas bajo del array y mostrar como queda el array
  


}
  export default ArrayObjetos;