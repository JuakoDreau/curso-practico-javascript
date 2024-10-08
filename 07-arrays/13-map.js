let usuarios = [
    {edad: 15, nombre: 'Juako'},
    {edad: 25, nombre: 'Anto'},
    {edad: 13, nombre: 'Inti'},
    {edad: 40, nombre: 'chanchito'},
];

const lista = usuarios
    .filter(u => u.edad>17)
    .map(u => `<li>${u.nombre}</li>`);
    
const html = `<ol>${lista.join('')}</ol>`;

console.log(html);

// const mapped = usuarios.map(u=>({
//         ...u,
//         mayor: u.edad > 17,
// }));

// console.log(mapped);