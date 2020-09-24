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
## Objetos Literales
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

## Arreglos

Se puede iniciar un arreglo así pero no es lo más recomendable
```js
const arreglo = new Array(100);
arreglo.push(1)

console.log(arreglo); // (101) [empty × 100, 1]
```

```js
const arreglo = [1,2,3,4];
```
**No es recomndable utilizar push porque muta el arreglo inicial**

Entonces **spread operator!!!**
```js
let arreglo2 = [ ...arreglo];
```
```js
arreglo.push(6);
arreglo2.push(5);

console.log(arreglo); // [1, 2, 3, 4, 6]
console.log(arreglo2); // [1, 2, 3, 4, 5]
```

Array.prototype.map --> CREA UN NUEVO ARREGLO!!!!

Cada función en js cuando no tiene un retorno explicito es undefined
```js
const arreglo3 = arreglo2.map(function(number){
  return number * 2
});

console.log(arreglo3); // [2, 4, 6, 8, 10]
```

## Funciones en JS
```js
function saludar(nombre){
  return `Holaaa ${ nombre }`
}


console.log(saludar); // referenciaa a la funcion
console.log(saludar('sofia'));

```
Usar mejor const 
```js
const saludar2 = function(nombre){
  return `Holaaa ${ nombre }`
}

console.log(saludar2('richii'));
```

Funcion flecha o lambda
```js
const saludar3 = nombre => {
  return `Holaaa ${ nombre }`
}
// Cuando solo hay un return 
const saludar4 = nombre => `Holaaa ${ nombre }`

console.log(saludar3('laika'));

const getUser = () => {
  return {
    uid: '2343',
    userName: 'chofi'
  }
};

console.log(getUser());

// quitar el return explicito se hace mediante el uso de paréntesis
const getUser2 = () => (
  {
    uid: '2343',
    userName: 'chofi'
  }
);
```

```js
// Tarea 
// 1. Transformar a función flecha
// 2. Retornar un objeto implícito ({})
// 3. Prubas
function getUsuarioActivo(nombre){
  return {
    id: 134,
    nickName:'hh'
  }
};

const usuarioActivo = getUsuarioActivo('juan')

const getUsuarioActivo2 = nombre => ({ id: 123 , nickName: 'kdofk234'})

console.log(getUsuarioActivo2('Pedro'));
```
