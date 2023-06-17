const producto = {
    nombreProducto : "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const medidad = {
    peso: '1kg',
    medida: '1m',
}

const nuevoProducto = { ...producto, ...medidad};

console.log(producto)
console.log(nuevoProducto)