// "use strict"  //Correr JS en modo estricto
// objetos
const producto = {
    nombreProducto : "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
}
Object.freeze(producto); // .Freeze no te permite agregar, modificar o eliminar nada de un objeto .Seal te permite solamente modificar una propiedad de la ya existente

producto.imagen = 'imagen.jpg';

console.log(producto);