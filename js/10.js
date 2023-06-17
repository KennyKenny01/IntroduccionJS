// Objetos

const nombreProducto = "Monitor 20 Pulgada";
const precio = 300;
const disponible = true;


const productor = {
    nombreProducto : "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
}

console.log(productor)

// console.log(productor.precio)
// console.log(productor.nombreProducto)
// console.log(productor.disponible)

// Agregar nuevas propiedades
productor.imagen = 'imagen.jps'

// Eliminar propiedades 

delete productor.disponible;
console.log(productor)