let usuarios = [
    {edad: 15, nombre: 'Juako'},
    {edad: 25, nombre: 'Anto'},
    {edad: 13, nombre: 'Inti'},
    {edad: 40, nombre: 'chanchito'},
];

const mayores = usuarios.filter(u => u.edad > 17);
const menores = usuarios.filter(u => u.edad < 18);

console.log(mayores);
console.log(menores);