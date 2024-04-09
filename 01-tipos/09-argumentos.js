//parametros son los que determino a las variables que se le darán valor desde los argumentos
function suma(a, b) {
    console.log(arguments)
    return a + b;
}

//argumentos son los que envio a la funcion
let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);