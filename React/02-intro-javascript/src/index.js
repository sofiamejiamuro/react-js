const nombre = 'sofia';
const apellido ='mejia';

const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto2 = ` 

Hola ${ nombre } ${ apellido }

`

console.log(nombreCompleto, nombreCompleto2);

function getSaludo(nombre) {
  return `hola mundo ${nombre}`;
}

console.log(`Este es un text: ${ getSaludo(nombre) }`);