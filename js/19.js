// function sumar(n1, n2){
//     return n1 + n2;
// }

// const resultado = sumar(2, 3)

// console.log(resultado);

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return 1.18 * total;
}

total = agregarCarrito(100)
total = agregarCarrito(500)
total = agregarCarrito(800)

console.log(total);

const totalApagar = calcularImpuesto(total);

console.log(`El Total a pagar con impuesto es de: $${totalApagar}`);
