const saludo = "Hola \\Mundo! \nbienvenido a\t \"ultimate javascript\" :)";

const nombre = "Juako"
const apellido = "Dreau"
function plantilla(nombre){ 
    return `Hola ${nombre}!

Bienvenido a "Ultimate Javascript" 

Cariños Juako :D
`
}

console.log(plantilla("Compadrito"));