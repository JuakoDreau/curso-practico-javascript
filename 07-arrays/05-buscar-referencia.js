const usuarios =[
    {id: 1, name: 'Chanchito'},
    {id: 3, name: 'Chanchito'},
    {id: 2, name: 'Feliz'},
];

// const resultado = usuarios.indexOf();

//
const resultado = usuarios.find(usuario =>
    usuario.name === "Chanchito");

const resultado2 = usuarios.findIndex(usuario =>
        usuario.name === "Chanchito");

console.log(resultado);