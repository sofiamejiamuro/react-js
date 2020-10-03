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
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en componente <PrimeraApp />', () => {
  test('debe mostar <PrimeraApp/> correctamente', () => {
    
    const saludo = 'Hola soy Sofia'
    const wrapper = shallow(<PrimeraApp saludo={ saludo } />)

    // asegurarnos de que se renderice
    expect( wrapper ).toMatchSnapshot();

  })
  
})
```
**TEST**
```js
import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en componente <PrimeraApp>', () => {
  test('debe el mensaje "Hola soy Sofia"', () => {
    //Evaluar sobre el componente renderizado
    const saludo = 'Hola soy Sofia'; 

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
3. installar e importar 'enzyme-to-json'
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

describe('Pruebas en componente <PrimeraApp />', () => {
  test('debe mostar <PrimeraApp/> correctamente', () => {
    
    const saludo = 'Hola soy Sofia';
    const wrapper = shallow(<PrimeraApp saludo={ saludo }/>);

    // asegurarnos de que se renderice
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

describe('Pruebas para componente <CounterApp />', () => {
  test('Debe mostrar <CounterApp /> correctamente', () => {
    const wrapper = shallow(<CounterApp />);
    expect( wrapper ).toMatchSnapshot();
  });

  test('debe mostrar el valor por defecto de 100', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={ value }/>);
    
    const counterValue = wrapper.find('h2').text();
    expect( counterValue ).toBe(`${ value }`);
  })
  
});
```



