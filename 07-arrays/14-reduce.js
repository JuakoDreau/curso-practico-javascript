// const numeros = [1,2,3,4];

// const suma = numeros.reduce((acc, el)=>{
//     return acc + el;
// }, 0);

// console.log(suma);

// const anidado = [[1,2], 3, [4,5]];

// const plano = anidado
//     .reduce((acc, el)=>acc.concat(el),[]);

// console.log(plano);

const usuarios = [
    {edad: 15, nombre: 'Juako'},
    {edad: 25, nombre: 'Anto'},
    {edad: 13, nombre: 'Inti'},
    {edad: 40, nombre: 'chanchito'},
];

const indexado = usuarios.reduce((acc,el)=>({
    ...acc,
    [el.nombre]: el,
}),{});

console.log(indexado);