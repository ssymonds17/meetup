import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
 let NumberOfEventsWrapper;
 beforeAll(() => {
  NumberOfEventsWrapper = shallow(<NumberOfEvents />);
 });

 test('textbox is rendered correctly', () => {
  expect(NumberOfEventsWrapper.find('.EventNumberBox')).toHaveLength(1);
 });

 test('state holds 32 events as default', () => {
  expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
 });

 test('textbox label rendered correctly', () => {
  expect(NumberOfEventsWrapper.find('.EventNumberBox label')).toHaveLength(1);
 });

 test('textbox input field rendered correctly', () => {
  expect(NumberOfEventsWrapper.find('.EventNumberBox input')).toHaveLength(1);
 });

 test('textbox input is equal to state numberOfEvents', () => {
  const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
  expect(NumberOfEventsWrapper.find('#EventNumberBox_Input').prop('value')).toBe(numberOfEvents);
 });

 test('state change when input changes', () => {
  const eventObject = { target: { value: 12 } };
  NumberOfEventsWrapper.find('#EventNumberBox_Input').simulate('change', eventObject);
  expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(12);
 })
});

describe('<NumberOfEvents /> integration', () => {
 test('', () => {
  const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  NumberOfEventsWrapper.find('number').simulate('change', { target: { value: 1 } });
  await NumberOfEventsWrapper.update();
  expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(1);
 });
});