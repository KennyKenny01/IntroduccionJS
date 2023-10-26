



const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

const carrito = [
    { nombre: 'Monitor 20 Pulgada', Precio: 500},
    { nombre: 'Laptop', Precio: 100},
    { nombre: 'Nvidia GTX 3060', Precio:8500},
    { nombre: 'Tablet', Precio: 400},
    { nombre: 'Mouse Logitech Pro', Precio: 900},
    { nombre: 'Teclado Mecanico', Precio: 700},
    { nombre: 'MousePad', Precio: 100},
    { nombre: 'Monitor 30 Pulgada', Precio: 800},
    { nombre: 'Iphone 12 ProMax', Precio: 1200},
];

// ForEach
meses.forEach(function(mes) {
    if (mes == 'Marzo') {
        console.log('Marzo si existe');
        }
});


//Includes

let resultado = meses.includes('Diciembre');

//Some ideal para arreglos de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'Laptop'
})


// Reduce

resultado = carrito.reduce(function(total, producto) {
    return total + producto.Precio

}, 0);

console.log(resultado)
