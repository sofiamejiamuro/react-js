// Arreglos

/*
// se puede iniciar un arreglo así pero no es lo más recomendable
const arreglo = new Array(100);
arreglo.push(1)

console.log(arreglo); // (101) [empty × 100, 1]
*/

const arreglo = [1,2,3,4];

// no es recomndable utilizar push porque muta el arreglo inicial 


// Entonces spread operator!!!
let arreglo2 = [ ...arreglo];
arreglo.push(5);
arreglo2.push(6);

//const arreglo3 = arreglo2.map()
// Array.prototype.map
console.log(arreglo);
console.log(arreglo2);
//console.log(arreglo3);