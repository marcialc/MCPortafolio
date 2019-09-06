import React from 'react';
import App from "../App";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('React component test with Enzyme', () => {
  it('renders home crashing', () => {
     shallow(<App></App>);
   });
});



