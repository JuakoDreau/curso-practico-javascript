// Las funciones constructoras tienen que usar UpperCamelCase
// Las funciones Factory tienen que usa camelCase

//{id: 1, recuperarClave: function(){}}
function Usuario(params) {
    this.id = 1;
    this.recuperarClave = function () {
        console.log('recuperando clave...');
    };
}

//la palabra New genera diferentes acciones
// Crea un objeto vacio
//genera un prototipo
// a la palabra This se le asigna el el objeto vacio recien creado
// retorna automaticamente el objeto creado con las asignaciones pertinentes
let usuario = new Usuario();
console.log(usuario);