import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fishes from '../Fishes';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const fishes = [
  {
    id: 1,
    name: "Seymour",
    age: 3,
    species: "🐟",
    enjoys: "Swimming"
  },
  {
    id: 2,
    name: "Fredward",
    age: 2,
    species: "🐠",
    enjoys: "Playing the ukulele"
  },
  {
    id: 3,
    name: "Octavius",
    age: 8,
    species: "🐙",
    enjoys: "Arm wrestling"
  }
]
//
// it('Fishes renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<Fishes />, div)
// })

it('Renders the fishies', () => {
  const component = mount(<Fishes fishes = {fishes} />);
  const headings = component.find('h4 > .fish-name')
  expect(headings.length).toBe(3)
})
