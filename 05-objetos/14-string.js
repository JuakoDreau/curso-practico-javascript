const saludo = 'Hola Mundo!';
//              012345...
const despedida = new String("Chao mundo :(");
console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
console.log(saludo.indexOf("Mu"));
console.log(saludo.indexOf("asd"));
console.log(saludo.includes("Mu"));
let nuevoSaludo = saludo.replace("Mundo","Joaquin");
console.log(nuevoSaludo, saludo);
console.log(saludo.toUpperCase());
console.log(saludo.toLowerCase());

console.log(saludo.substring(0,4));
console.log(saludo.substr(2,4));// deprecado!!

const espacios = "     Hola      Mundo!     ";
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());