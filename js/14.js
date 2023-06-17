// Arreglos o Arrays

const numeros = [10,20,30,40,50];
// console.table(numeros);

// const arreglos = ["Hola", 10, true, "si", null, {Nombre: "Kenny", Trabajo: "programador"}, ["Otro Arrelgo", 1,2,3]];
// console.log(arreglos);

// Acerder a los valores de un arreglos

// console.log(numeros [1]);
// console.log(numeros [2]);
// console.log(numeros [3]);
// console.log(numeros [4]);
// console.log(numeros [0]);
// // Conocer la Extension de un arreglo o cantidad de un arreglo

// console.log(meses.length);

// numeros.forEach( function(numeros){
//     console.log(numeros)
// })

numeros.push(60,70,80); //Agrega al final del arreglo o array
numeros.unshift (-10,-20,-30); //Agrega al inicio del arreglo o array


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// meses.pop(); //Elimina el ultimo elemento dle array
// meses.shift();//Elimina el primero elemento del array

// meses.splice(2,1);
// console.table(meses);

//Rest Operator o Spread Operator

const NuevoArreglo = [...meses, 'junio'];
console.log(NuevoArreglo);