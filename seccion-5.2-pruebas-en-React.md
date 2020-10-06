## Pruebas en React

Hasta ahora hemos estado haciendo pruebas en archivos de javascript usando la librería **Jest**, para React también se puede usar **Jest**,

Debemos tener el archivo de configuración setupTesting.js :
```js
import '@testing-library/jest-dom/extend-expect';
```

e importar las siguientes librerías
```js
import React from 'react';
import { render } from '@testing-library/react';
```

Ejemplo:
**COMPONENTE**

```js
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ 
  saludo, 
  subtitulo 
}) =>{

  return (
    <>
      <h1>{ saludo }</h1>
      <p>{ subtitulo }</p>
    </>
  );

}

// Defino las propiedades del componente
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

// Valores por defecto, sí aaparecen en la cpmnsola
PrimeraApp.defaultProps ={
  subtitulo: 'Soy un subtitulo'
}
 
export default PrimeraApp;
```

**TEST**

Using testing library of React

```js
// It is important to import react in the test file
import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en componente <PrimeraApp>', () => {
  test('debe el mensaje "Hola soy Sofia"', () => {
    //Evaluar sobre el componente renderizado
    const saludo = 'Hola soy Sofia'; 

    // wrapper commonly used to rendered components
    // render is a method to render a compoenent
    const wrapper = render(<PrimeraApp saludo={ saludo }/>)
    // const { getByText } = render(<PrimeraApp saludo={ saludo }/>)

    expect(wrapper.getByText((saludo))).toBeInTheDocument();

  })
  
})
```

También se puede utilizar la librería **Enzyme** para testing

1. Install
```js
npm i --save-dev enzyme enzyme-adapter-react-16
```

2. En setupTesting.js
```js
// import '@testing-library/jest-dom/extend-expect';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

```
3. installar e importar 'enzyme-to-json' para el snapshot
```js
$ npm install --save-dev enzyme-to-json
```

On setupTestig.js
```js
import { createSerializer } from 'enzyme-to-json';
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
```

**TESTING**
```js

import React from 'react';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en componente <PrimeraApp />', () => {
  test('debe mostar <PrimeraApp/> correctamente', () => {
    
    const saludo = 'Hola soy Sofia';
    // shallow is a method from enzyme, similar to render from react but with more options
    const wrapper = shallow(<PrimeraApp saludo={ saludo }/>);

    // 
    expect( wrapper ).toMatchSnapshot();

  })

  test('debe de mostrar el subtitulo enviado por props ', () => {

    const saludo = 'Hola soy Sofia'
    const subt = 'Soy un subtitulo'

    const wrapper = shallow(
      <PrimeraApp 
        saludo={ saludo }
        subtitulo={ subt }
        />);

    const textoParrafo = wrapper.find('p').text();
    console.log(textoParrafo);
    expect( textoParrafo ).toBe( subt )

  })
  
  
})
```

```js
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';




describe('Pruebas en el <CounterApp />', () => {

  let wrapper = shallow( <CounterApp /> );

  // beforeEach() se ejecuta antes de cada prueba

  beforeEach( () => {

    wrapper = shallow( <CounterApp /> );

  });

  test('debe de mostrar <CounterApp /> correctamente', () => {

    expect( wrapper ).toMatchSnapshot();

  });


  test('debe de mostrar el valor por defecto de 100 ', () => {
      
    const wrapper = shallow( <CounterApp value={ 100 } /> );
    const counterText = wrapper.find('h2').text().trim();  
    expect( counterText ).toBe('100');

  })

  test('debe de incrementar con el botón +1', () => {

    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect( counterText ).toBe('11');

  })
    
  // Las pruebas se ejecutan en orden so para este momento el valor de counterText ya es 11
  // Se necesita reinicializar el componente

  test('debe de decrementar con el botón -1', () => {
    
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect( counterText ).toBe('9');

  });

  // RESET, vuelve al valor incial
  test('debe de colocar el valor por defecto con el botón reset ', () => { 
    const wrapper = shallow( <CounterApp value={ 105 } /> );

    // Dos botones de refrencia
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    
    wrapper.find('button').at(1).simulate('click');

    const counterText = wrapper.find('h2').text().trim();

    expect( counterText ).toBe( '105' )
  })
  
})

```



