// Las variables constantes no puede cambiar tu tipo de datos, pero si agregar o eliminar contenido de este.
// Por ejemplo un objeto definido como variable constante, no puede dejar de ser objeto, pero se puede modificar el contenido de este
// O sea, puede agregar, modificar o eliminar el contenido que esté dentro del objeto

const user = { id: 1};

user.name= 'Juako';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

//Con el metodo Freeze se bloquea todo y no puede modificarse nada del objeto ni su tipo ni sus propiedades ni valores
//const user1 = Object.freeze({id: 1});

//Con el metodo Seal se mantiene su tipo y propiedades, pero se pueden modificar sus valores
const user1 = Object.seal({id: 1});
user1.name = 'Juako';
user1.id = 2;
console.log(user1);