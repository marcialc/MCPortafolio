import React from 'react';
import App from "../App";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
describe('React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<App />);
   });
});
