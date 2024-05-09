//Las funciones son objetos de primera clase
function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

//Asignar una funcion a una variable
const U = Usuario;
let user = new U('Joaquín');

console.log(user);

//Funciones como argumento
function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);

//retornar una funcion de otra funcion
function returned() {
    return function () {
        console.log('Hola Mundo');
    }
}

let saludo = returned();
saludo();



