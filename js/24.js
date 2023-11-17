

////For Loop
//for( let i = 0; i < 10; i++ ) {
//    console.log(i);
//}

//for(let i = 1; i <= 100; i++){
//    if( i % 2 === 0 ) {
//        console.log(`El numero ${i} es PAR`)
//    } else {
//        console.log(`El numero ${i} es INPAR`)
//    }
//}



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
for(let i = 0; i < carrito.length; i++ ) {
        console.log( carrito[i] );
}
//While Loop La condicion se debe cumplir para que se ejecute
//let i = 20; //Indice
//
//while(i < 20){ //Condicion
//    console.log('desde el while loop');
//
//    i++; //Incremeton
//}

//Do While Loop Se ejecuta una vez aunque no se cumpla

let i = 0;

do {
console.log(i)

i++;
}while (i < 10);