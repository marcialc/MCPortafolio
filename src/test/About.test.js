import React from 'react';
import About from "../screens/About";
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {age} from '../screens/About';

configure({adapter: new Adapter()});

describe('React component test with Enzyme', () => {
  it('renders home crashing', () => {
     shallow(<About/>);
   });
});

it('renders correctly', () => {
  const tree = renderer.create(<About />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('test right age', () => {
  let value = age(1995, 2019);
  expect(value).toBe(24);

  value = age(1870, 2019);
  expect(value).toBe(149);
})

