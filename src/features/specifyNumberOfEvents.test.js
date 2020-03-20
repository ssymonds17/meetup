import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
 test('When the user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
  let NumberOfEventsWrapper;
  given('the user has opened the app', () => {

  });

  when('the user hasn\'t specified a number of results', () => {
   NumberOfEventsWrapper = mount(< NumberOfEvents />);
  });

  then('the number of event results is set at 32', () => {
   expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(32);
  });
 });

 test('User can change the number of events that they want to see', ({ given, when, then }) => {
  let NumberOfEventsWrapper;
  given('user has opened the app', () => {
   NumberOfEventsWrapper = mount(<NumberOfEvents />);
  });

  when('the user sets a number of desired event results', () => {
   NumberOfEventsWrapper.find('.number').simulate('change', { target: { value: 10 } });
  });

  then('the specified number of even results are displayed', () => {
   expect(NumberOfEventsWrapper.find('.number')).toEqual(10);
  });
 });
});