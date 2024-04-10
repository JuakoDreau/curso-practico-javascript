let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
};

for (const prop in user) {
    console.log(prop, user[prop])
}

let animales = ['Chanchito feliz', 'Dragon', 'Canguro'];

for (const indice in animales) {
    console.log(indice, animales[indice])
}