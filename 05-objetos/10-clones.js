let punto = {
    x: 10,
    y: 15,
};

let refPunto = Object.assign(punto, {z: 20, x:1});
let clonePunto = Object.assign({}, punto, {z: 20, x:1});
// console.log(punto, clonePunto);
// console.log(refPunto);

let copiaPunto = Object.assign(punto, {z: 20, x:1});
// console.log(copiaPunto, punto);

let copia3 = {...punto};
// console.log(copia3);

let copia4 = {};
for (const llave in punto) {
    copia4[llave] = punto[llave];
}
console.log(copia4);