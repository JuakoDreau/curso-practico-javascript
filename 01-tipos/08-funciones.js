/**
 * las Expressions son lineas o fragmentos de codigos que realizan y/o devuelven un resultado
 * las Declaration son elementos en el codigo que se va a referencias en un futuro
 * los Statement son elementos que no serán referenciados como it, for, else, switch
 */


function saludar(){
    console.log('Hola Mundo');
}

saludar();

function suma(){
    return 2 + 2;
}

let resultado = suma();
console.log(suma());