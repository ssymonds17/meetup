import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
 test('An event element is collapsed by default', ({ given, when, then }) => {
  let AppWrapper;
  given('the user has opened the app', () => {

  });

  when('the user has not specified a particular event', () => {
   AppWrapper = mount(< App />);
  });

  then('the details for that (and all) events should be hidden', () => {
   expect(AppWrapper.find('.EventDescriptionContainer')).toHaveLength(0);
  });
 });

 test('User can expand an event to see its details', ({ given, when, then }) => {
  let AppWrapper;
  given('user has opened the app', () => {
   AppWrapper = mount(< App />);
  });

  when('the user specifies a particular event', () => {
   AppWrapper.update();
   AppWrapper.find('.details-btn').at(0).simulate('click');
  });

  then('the details for that event will be displayed', () => {
   expect(AppWrapper.find('.EventDescription')).toHaveLength(1);
  });
 });

 test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
  let AppWrapper;
  given('the user has opened the app', () => {
   AppWrapper = mount(< App />);
  });

  and('the event details are already showing', () => {
   AppWrapper.update();
   AppWrapper.find('.details-btn').at(0).simulate('click');
   expect(AppWrapper.find('.EventDescription')).toHaveLength(1);
  });

  when('the user chooses to collapse the information for that event', () => {
   AppWrapper.find('.details-btn').at(0).simulate('click');
  });

  then('the details for that event will be hidden', () => {
   expect(AppWrapper.find('.EventDescriptionContainer')).toHaveLength(0);
  });
 });
});
