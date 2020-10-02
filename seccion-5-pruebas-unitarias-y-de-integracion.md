# Introducción a las pruebas unitarias y de integración

### Dos tipos de prubas:

- **Unitarias** -> enfocadas en pequeñas funcionalidades
- **Integración** -> cómo reaccionan varias piezas en conjunto

### Características

- Fáciles de escribir
- Fáciles de leer
- Confiables
- Rápidas
- Principalmente unitarias

## AAA:

Arrange - Preparamos el estado inicial: 
  - Inicializamos variables
  - Importaciones necesarias

Act - Aplicar acciones o estimulos al sujeto de prueba:
  - Llamar métodos
  - Simular clicks
  - Realizar acciones sobre el paso anterior 

Assert - Observar el comportamiento resultante:
  - Son los resultados esperados


## Directorio de pruebas

React trabaja con Jest
```js
demo.test.js
```
```js
npm run test
```

Las pruebas se ejecutan en todos los archivos con terminación .test.js

snippet que crea el método de test():  
test + tab

```js
// Recibe dos argumentos ('lo qeu se va a probar, callback)
// test suits
test('aquí se escribe lo que se va a probar', () => {
  
  const isActive= true;

  if(isActive) {
    throw new Error('Mo está activo');
  }

});
```

Documentación de Jest https://jestjs.io/docs/

expect()

toBe()

```js
test('deben de ser iguales los strings', () => {
  // 1. Inicialización
  const mensaje = 'hola mundo';

  // 2. Estimulo
  const mensaje2 = `hola mundo`;

  // 3. Observar el comportamiento
  expect( mensaje ).toBe( mensaje2 );

});
```

```js
// Agrupar 
describe('Pruebas en el archivo demo.test.js', () => {

  test('deben de ser iguales los strings', () => {
    // 1. Inicialización
    const mensaje = 'hola mundo';
  
    // 2. Estimulo
    const mensaje2 = `hola mundo`;
  
    // 3. Observar el comportamiento
    expect( mensaje ).toBe( mensaje2 );
  
  });
  
})
```

Se deben exportar las funciones a probar para importarlas en los tests
**Archivo que se desea testear**
```js
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}
```
**TEST**
```js
// para mirar las ayudas de los métodos
import '@testing-library/jest-dom';

const { getSaludo } = require("../../base/02-template-string");

describe('Pruebas en 02-template-string', () => {
  
  test('prueba en método getSaludo() ', () => {
    const nombre = 'Sofia';

    const saludo = getSaludo(nombre);

    expect( saludo ).toBe( `Hola ${nombre}`)
  })
  
})
```

en consola:
```js
p

escribir nombre del acrchivo

regresa el test del archivo unicamente

```

También podemos revisar qué pasaría si hay paràmetros por default

```js
export function getSaludo(nombre='Richi') {
    return 'Hola ' + nombre;
}
```

```js
import '@testing-library/jest-dom';
const { getSaludo } = require("../../base/02-template-string");

describe('archivo 02', () => {

  test('getSaludo debe de retornar Hola Sofia ', () => {
    // 1. Inicializacion
    const name = 'Sofia';

    // 2. Estimulo
    const saludo = getSaludo( name );

    // 3. Observar el comportamiento
    expect( saludo ).toBe( `Hola ${name}` )

  })

  test('getSaludo debe de retornar el parámetro establecido por default si no le pasamos un argumento', () => {
    // 1. Inicializacion

    // 2. Estimulo
    const saludo = getSaludo();

    // 3. Observar el comportamiento
    expect( saludo ).toBe( `Hola Richi` )

  })
  
})
```
Trabajar con objetos
```js
const { getUser } = require("../../base/05-funciones")
const { getUsuarioActivo } = require("../../base/05-funciones")


describe('05 funciones', () => {
  test('getUser debe retornar un objeto', () => {
    // 1.
    const userTest = {
      uId: 'ABC123',
      username: 'El_Papi1502'
    } 
    // 2.
    const user = getUser();

    // 3.
    // es un error porque no se evaluan los objetos con .toBe()
    // expect( user ).toBe( userTest );
    // Los objetos se evalñuan con toEqual()
    expect( user ).toEqual( userTest );
  })
  test('getUsuario activo debe retornar un objeto', () => {
    // 1.
    const nombre = 'Sofia'
    const userTest = {
      uId: 'ABC567',
      username: 'Sofia',
    } 
    
    // 2.
    const userActive = getUsuarioActivo( nombre );

    //w
    expect( userActive ).toEqual( userTest );
  })
  
  
});
```

Trabajar destructuring de arrays

```js
const { retornaArreglo } = require("../../base/07-deses-arr")

describe('Prubas destructuring arrays', () => {
  test('retornaArreglo debe regresarme un string y un número ', () => {
    
    const arr = retornaArreglo ();
    expect( arr ).toEqual( ['ABC',123] );

    const [ letras, numeros] = retornaArreglo ();
    expect( letras ).toBe('ABC')
    expect( typeof letras ).toBe('string')
  
    expect( numeros ).toBe( 123 )
    expect( typeof numeros ).toBe('number')
  })
  
})

```

## PRUEBAS ASINCRONAS

### Solo evaluar laa promesa 

**PROMESA**
```js

export const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            // Tarea
            // importen el 
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe' );
            }
        }, 1000 )
    
    });


}
```
**TEST**
```js

describe('Pruebas con promesas', () => {
  // done para promesas
  test('debe rerornar un heroe async', ( done ) => {
    const id = 1;

    getHeroeByIdAsync(id)
      .then( heroe => {

        expect( heroe ).toBe( heroes[0])
        done();
      })

  });
  test('debe rerornar un error si el heroe po ID no existe', ( done ) => {
    const id = 10;

    getHeroeByIdAsync(id)
      .catch( error => {

        expect( error ).toBe( 'No se pudo encontrar el héroe' )
        done();
        
      });

  });
});
```

### Evaluar el await de la promesa

**async**
```js
export const getImagen = async() => {

    try {

        const apiKey = 'DLs4Ld2lXws5Wf8dsGjmtaFfK1CjDKtQ';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

       return url;

    } catch (error) {
        // manejo del error
        return 'No existe';
    }

}
```
**test**
```js

describe('Puebas con async-await y Fetch', () => {
  
  test('debe de retornar el url de la imagen ', async () => {
    // getImage es una promesa y se debe resolver, por eso ponemos async al test
    const url = await getImagen();

    expect( typeof url ).toBe( 'string')

  })
  
})
```