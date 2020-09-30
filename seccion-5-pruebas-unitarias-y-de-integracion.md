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

```js
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