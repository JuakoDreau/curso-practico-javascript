/**
 * Imprimir los numeros impares del 0-10
 */

//Solución 1
// for (let i = 0; i <= 10; i++) {
//     if (i%2 !== 0) {
//         console.log('Impar ', i);
//     }
// }

let i = 0;
while(i <= 10){
    if (i % 2 !== 0) {
        console.log('impar', i);
    }
    i++;
}