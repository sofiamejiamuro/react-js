Review JS ES6
```js
npx --version
```
const --> no cambian, no se renombran 

let --> sí cambian, si no sabemos si va a haber un cambio usamos const 

remember block scope { }

**Template string** 

```js
const nombre = 'sofia';
const apellido ='mejia';

const nombreCompleto = nombre + ' ' + apellido; 
const nombreCompleto2 = ` 

Hola ${ nombre } ${ apellido }

`

console.log(nombreCompleto, nombreCompleto2);
// sofia mejia
/*

sofia mejia

*/

function getSaludo(nombre) {
  return `hola mundo ${nombre}`;
}

console.log(`Este es un text: ${ getSaludo(nombre) }`); //Este es un texto: sofia mejia

```
**Objetos Literales**
```js
const persona = {
  nombre : 'sofia',
  apellido :  'mejia',
  edad: 30,
  direccion : {
    ciudad: 'New York',
    cp : 49403294,
    lat: 14.233,
    lng: 34.089,
  }
}
```
Estamos copiando la referencia en el espacio y no el objeto en sí, no se está clonando
```js 
const persona2 = persona;
```

Aquí sí se está clonado
```js
const persona3 = { ...persona }
```
```js
// mismo resultado, si los nombres van a ser iguales se puede omitir key:value
console.log( { 
  persona : persona
} );
console.log( { 
  persona 
} );
```
```js
console.table(persona);
console.log(persona2);
```

**Arreglos**