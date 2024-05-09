//Primitivos --> se copian
//referencia --> se crea referencian(objetos, array y funciones)

let a = {prop: 1};

function suma(n) {
    n.prop++;
}

suma(a);
console.log(a);

