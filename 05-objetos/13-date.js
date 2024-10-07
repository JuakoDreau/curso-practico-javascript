const ahora = new Date();
// console.log(ahora);
const fecha = new Date('December 13 1993 16:17 GMT-0400');//Mes-Dia-año
console.log(fecha);

const fecha2 = new Date(1993, 11, 25, 14, 15);
const fecha3 = new Date(1993, 11, 25, 14+15, 15);
console.log(fecha2);

console.log('dateString', fecha3.toDateString());
console.log('ISOString', fecha3.toISOString());
console.log('TimeString', fecha3.toTimeString());

fecha3.setFullYear(2011);
console.log(fecha3);