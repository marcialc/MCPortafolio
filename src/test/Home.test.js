import React from 'react';
import Home from '../screens/Home';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('React component test with Enzyme', () => {
  it('renders home crashing', () => {
     shallow(<Home.name/>);
   });
});


test('name', () => {
    const name = Home.h1;
    console.log(name)
    expect(name).not.toBeNull()
})