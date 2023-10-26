// DEclaracion de Funcion

function sumar () {
    console.log(10*10);

}

sumar()


//Expresion de la funcion
const sumar2 = function(a,b){
    console.log(a+b);

}

sumar2(2,5);

//IIFE
(function(){
    console.log('Esto es una Funcion')
})();