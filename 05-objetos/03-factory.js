let user = {
    id: 1,
    email: 'jota@holamundo.cl',
    name: 'Joaquín',
    activo: true,
    recuperarClave: function () {
        console.log('Recuperando clave...');
    },
};

function crearUsuario(name, email) {
    return {
        id: 1,
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Joaquín', 'jota@holamundo.cl');
let user2 = crearUsuario('Antonia', 'anto@holamundo.cl');

console.log(user1, user2);