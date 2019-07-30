import React from 'react';
import ReactDOM from 'react-dom';
import NewFish from '../NewFish';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it ('NewFish renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewFish />, div)
})

it ('has a name input', () => {
  const component = mount(<NewFish />);
  expect(component.find('label#name').text()).toBe("Name:")
})

it ('has an age input', () => {
  const component = mount(<NewFish />);
  expect(component.find('label#age').text()).toBe("Age:")
})

it ('has an enjoys input', () => {
  const component = mount(<NewFish />);
  expect(component.find('label#enjoys').text()).toBe("Likes:")
})

it ('has a species input', () => {
  const component = mount(<NewFish />);
  expect(component.find('label#species').text()).toBe("Species:")
})

it ('has a submit button', () => {
  const component = mount(<NewFish />);
  expect(component.find('button#submit').text()).toBe("Create My Fishy Friend")
})
