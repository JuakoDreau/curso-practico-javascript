/**
 * Indice validar que no sea menor a cero y que el elemento exista en el arra
 */

function getbyIdx(arr, idx){
    if (arr.length <= idx || idx < 0) {
        return 'Elemento no existe';
    }

    return arr[idx];
}

let resultado = getbyIdx([1,2], 1);
console.log(resultado);