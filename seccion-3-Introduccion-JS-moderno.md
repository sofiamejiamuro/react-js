## Review JS ES6
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

## Object destructuring

```js
const persona = {
  nombre: 'sofia',
  edad: 30,
  clave: 'developer'

}
 // Extraer la info del objeto 
console.log(persona.clave);
```

Destructuring, asignar a una variable el valor de una propiedad de un objeto 
```js
 const { nombre, edad, clave } = persona;
 // Si quiero cambiarle el nombre a la propiedad al momento de asignarla a una variable
 const { nombre: name } = persona;

 console.log(nombre);
 console.log(edad);
 console.log(clave);
```

```js
const retornaPersona = (usuario) => {
   console.log(usuario);
 } 

// Se puede desestrucurar desde elparametro
const retornaPersona = ({ nombre, edad}) => {
  console.log(nombre, edad);
} */

//Podemos asignar una nueva propiedad
const retornaPersona = ({ nombre, edad , rango = 'frontend'}) => {
  console.log(nombre, edad, rango);
} 
```
**useContext**
```js
// sustituir
// const retornaPersona = ({ clave, nombre, edad , rango}) => {
// por
const useContext = ({ clave, nombre, edad , rango}) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 12.345,
      lng: -344.324
    }
  }
}
```

```js
const employee = useContext(persona)
console.log(employee); // objeto

const { nombreClave, anios, latlng } = employee;
// Propiedades del objeto destructuradas
console.log(nombreClave, anios);  
console.log(latlng);
```
Destructurar un objeto bajando de nivel a otro objeto
```js
const { nombreClave, anios, latlng:{ lat, lng} } = useContext(persona);
console.log(nombreClave, anios );
console.log(latlng); // Marca error porque ya no existe al desestructuralo
console.log(lat, lng);
```

## Desestructuración de Arreglos
```js
const personajes = ['Goku', 'Vegeta', 'Trunks'];

// Obtenerlos uno por uno
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]); 
```
Destructuring, hay que tener en cuenta que funciona según el lugar en el que está el elemento 
```js
const [ goku ] = personajes;
console.log(goku);
 
const [ ,vegeta ] = personajes;
console.log(vegeta);

const [ , ,trunks ] = personajes;
console.log(trunks);

const [ p1, p2, p3] = personajes;
console.log(p1);
console.log(p2);
console.log(p3);
```

```js
const retornaArreglo = () => {
  return ['ABC',123] 
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros); // 'ABC', 123
```
```js
const useState  = (valor) =>{
  return [ valor, () => { console.log( 'hola mundo')}];
}

const arr = useState('Goku');

console.log(arr); // ["Goku", ƒ]

arr[1](); // Hola mundo

const [nombre, sendGreeting ] = useState('Vegeta');

console.log(nombre); // Goku
sendGreetings(); // 'Hola mund'
```

## Export - Import 

**Multipes exportaciones y exportaciones por defecto**
```js
const heroes = []
```
```js
export const heroes = []
``` 
```js
export default heroes;
```
Se está exportando el contenido de todo el, archivo heroes.js, al importar se puede poner el nombre que sea
```js
export default  [ ]
``` 

Exportación por defecto y exportación individual
```js
export const owners = ['DC', 'Marvel'];
export default heroes;

// o
 
export {
  heroes as default,
  owners
}
```
**Importaciones**
```js
import { heroes } from './data/heroes';

```
Exportación por defecto y { x } exportaciones individuales
```js
import heroes, { owners } from './data/heroes'; 
```

## Find

```js
const getHeroeById = (id) => {
  return heroes.find(( heroe ) =>{
    if(heroe.id === id){
      return true
    } else {
      return false
    } 
  })

};

// Find retorna un boolean, solo retorna 1 elemento

const getHeroeById = (id) => {
  return heroes.find( heroe  => heroe.id === id)
};

console.log('id',getHeroeById(2)); // {Batman}

```
## Filter
```js
// Filter retorna un array con los objetos que tienen la propiedad que se está buscando 
const getHeroeByIdByOwner = (owner) =>{
  return heroes.filter( heroe  => heroe.owner === owner)
};
 
console.log('owner',getHeroeByIdByOwner('Marvel')); // [Batman, Superman, Spiderman]
```

## PROMESAS

then / catch / finaly --> depués del then y el catch
```js
const promesa = new Promise((resolve, reject) => {

  const heroe = getHeroeById(id)
  //console.log('promesa',heroe);
  resolve(heroe);
  //reject(':X')

 });

promesa.then((heroe) => {
  console.log('resolve', heroe);
})

.catch(err => {
  console.log(err);
}) 
```

```js
const getHeroeByIdAsync = (id) => {
  
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const heroe = getHeroeById(id)
      if(heroe){  
        //console.log('promesa',heroe);
        resolve(heroe);
        //reject(':X')
      } else {
        reject('nop hay heroe :C')
      }
    },2000)
    
   });
}

getHeroeByIdAsync(10)
  .then(heroe => console.log(heroe))
  .catch(err => console.log(err))

```
## FETCH API

Librería Incluida en JS 

```js
 const apiKey = 'US5pS4v19yQs5zl9oWSFwjUP6wWlnQzJ';
// Primer promesa convierte a .json
// Segunda promesa resulve la promesa anterior y muestra la data
const httpCall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
httpCall
.then(resp => resp.json())
.then(data => console.log(data.data))
.catch(console.warn) 

```
Using destructuring

```js
const apiKey = 'US5pS4v19yQs5zl9oWSFwjUP6wWlnQzJ';
const httpCall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
httpCall
.then(resp => resp.json())
.then(({data}) => {
  const { url } = data.images.original;
  const img = document.createElement('img');
  img.src = url;
  document.body.append( img )
})
.catch(console.warn)
```

## ASYNC-AWAIT
```js
const getImagePromise = () => {
  const promesa = new Promise((resolve, reject) => {
    resolve('https:// hdafiuwehe')
  })
  return promesa
}

getImagePromise().then(console.log);

const getImagePromise = () => {
  return ('https://hdafiuwehe');
}

console.log(getImagePromise()); // 'https:// hdafiuwehe' - es una función normal
```

```js
const getImagePromiseAsync = async () => {
  return ('https://hdafiuwehe');
}

console.log(getImagePromiseAsync()); // Ya es una promesa por el async

getImagePromiseAsync().then(console.log); // 'https:// hdafiuwehe'
```
```js
// getImagePromise returns a promise
const getImagePromise = async() => {
  try {
    const apiKey = 'US5pS4v19yQs5zl9oWSFwjUP6wWlnQzJ';
    // fetch returns also a promise que resuleve una response (.then)
    // usign await promise returns into reponse, espera a que esto se ejecute antes de seguir con la siguiente línea de código
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    // sin el await es una promesa, el await nos da el reponse
    const { data }=  await resp.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img ); 
  }catch(error){
    // Manejo del error
  }
 
}

getImagePromise();
// el try y el catch son las formas de manejo de errores en asyc/ await
```
## Operador ternario

**if normal**
```js
const activo =  true;

let mensaje = '';

if (activo) {
  mensaje = 'Activo';
} else {
  mensaje = 'Inactivo';
} 
```
**Operador ternario**
```js
const mensaje = ( activo ) ?'Activo' : 'Inactivo';

const mensaje =  activo && 'Activo'; // 'Activo'
const mensaje =  !activo && 'Activo'; // false
```