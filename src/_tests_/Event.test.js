import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
 let EventWrapper;
 beforeAll(() => {
  EventWrapper = shallow(<Event />);
 });

 test('component is rendered', () => {
  expect(EventWrapper).toHaveLength(1);
 })

 test('event container exists', () => {
  expect(EventWrapper.find('.Event')).toHaveLength(1);
 });

 test('that showDetails is false as default', () => {
  expect(EventWrapper.state('showDetails')).toBe(false);
 });

 test('EventOverview shows only name, date, and time, and Show More button as default', () => {
  expect(EventWrapper.find('.EventOverview').children()).toHaveLength(4);
 });

 test('EventDescriptionContainer is rendered when showDetails is true', () => {
  EventWrapper.setState({
   showDetails: true
  });
  expect(EventWrapper.find('.EventDescriptionContainer')).toHaveLength(1);
 });

 test('EventDescriptionContainer children are rendered when showDetails is true', () => {
  EventWrapper.setState({
   showDetails: true
  });
  expect(EventWrapper.find('.EventDescriptionContainer').children()).toHaveLength(2);
 });

 test('Button is rendered correctly in EventOverview', () => {
  expect(EventWrapper.find('.EventOverview button')).toHaveLength(1);
 });

 test('Show More button shows description on click', () => {
  EventWrapper.setState({
   showDetails: false
  });
  EventWrapper.find('.EventOverview button').simulate('click');
  expect(EventWrapper.state('showDetails')).toBe(true);
 });

 test('Show less button hides description on click', () => {
  EventWrapper.setState({
   showDetails: true
  });
  EventWrapper.find('.EventDescriptionContainer button').simulate('click');
  expect(EventWrapper.state('showDetails')).toBe(false);
 });

 test('Mock data renders correct event name', () => {
  const event = {
   "created": 1577461394000,
   "duration": 7200000,
   "id": "267449727",
   "name": "Soul night ",
   "date_in_series_pattern": false,
   "status": "upcoming",
   "time": 1585342800000,
   "local_date": "2020-03-27",
   "local_time": "21:00",
   "updated": 1580753712000,
   "utc_offset": 0,
   "waitlist_count": 0,
   "yes_rsvp_count": 12,
   "venue": {
    "id": 25565312,
    "name": " The Streatham Soul Club ",
    "lat": 51.43070983886719,
    "lon": -0.1297149956226349,
    "repinned": false,
    "address_1": "232 Streatham High Road London ",
    "city": "SW16 1BB",
    "country": "gb",
    "localized_country_name": "United Kingdom"
   },
   "group": {
    "created": 1283352783000,
    "name": "Epsom Meetup Group",
    "id": 1700109,
    "join_mode": "open",
    "lat": 51.310001373291016,
    "lon": -0.23999999463558197,
    "urlname": "Epsom-Social-Group",
    "who": "Members",
    "localized_location": "Epsom, United Kingdom",
    "state": "N7",
    "country": "gb",
    "region": "en_US",
    "timezone": "Europe/London"
   },
   "link": "https://www.meetup.com/Epsom-Social-Group/events/267449727/",
   "description": "<p>Friday night is soul night<br/>Free entry</p> <p><a href='http://www.whitelionsw16.co.uk' class='linkified'>http://www.whitelionsw16.co.uk</a><br/>In light of recent events I am rescheduling this event</p> ",
   "visibility": "public",
   "member_pay_fee": false
  }
  expect(EventWrapper.find('.EventName')).toBe('Soul night ');
 });

 test('Mock data renders correct event date', () => {
  const event = {
   "created": 1577461394000,
   "duration": 7200000,
   "id": "267449727",
   "name": "Soul night ",
   "date_in_series_pattern": false,
   "status": "upcoming",
   "time": 1585342800000,
   "local_date": "2020-03-27",
   "local_time": "21:00",
   "updated": 1580753712000,
   "utc_offset": 0,
   "waitlist_count": 0,
   "yes_rsvp_count": 12,
   "venue": {
    "id": 25565312,
    "name": " The Streatham Soul Club ",
    "lat": 51.43070983886719,
    "lon": -0.1297149956226349,
    "repinned": false,
    "address_1": "232 Streatham High Road London ",
    "city": "SW16 1BB",
    "country": "gb",
    "localized_country_name": "United Kingdom"
   },
   "group": {
    "created": 1283352783000,
    "name": "Epsom Meetup Group",
    "id": 1700109,
    "join_mode": "open",
    "lat": 51.310001373291016,
    "lon": -0.23999999463558197,
    "urlname": "Epsom-Social-Group",
    "who": "Members",
    "localized_location": "Epsom, United Kingdom",
    "state": "N7",
    "country": "gb",
    "region": "en_US",
    "timezone": "Europe/London"
   },
   "link": "https://www.meetup.com/Epsom-Social-Group/events/267449727/",
   "description": "<p>Friday night is soul night<br/>Free entry</p> <p><a href='http://www.whitelionsw16.co.uk' class='linkified'>http://www.whitelionsw16.co.uk</a><br/>In light of recent events I am rescheduling this event</p> ",
   "visibility": "public",
   "member_pay_fee": false
  }
  expect(EventWrapper.find('.EventDate')).toBe('2020-03-27');
 });

 test('Mock data renders correct event time', () => {
  const event = {
   "created": 1577461394000,
   "duration": 7200000,
   "id": "267449727",
   "name": "Soul night ",
   "date_in_series_pattern": false,
   "status": "upcoming",
   "time": 1585342800000,
   "local_date": "2020-03-27",
   "local_time": "21:00",
   "updated": 1580753712000,
   "utc_offset": 0,
   "waitlist_count": 0,
   "yes_rsvp_count": 12,
   "venue": {
    "id": 25565312,
    "name": " The Streatham Soul Club ",
    "lat": 51.43070983886719,
    "lon": -0.1297149956226349,
    "repinned": false,
    "address_1": "232 Streatham High Road London ",
    "city": "SW16 1BB",
    "country": "gb",
    "localized_country_name": "United Kingdom"
   },
   "group": {
    "created": 1283352783000,
    "name": "Epsom Meetup Group",
    "id": 1700109,
    "join_mode": "open",
    "lat": 51.310001373291016,
    "lon": -0.23999999463558197,
    "urlname": "Epsom-Social-Group",
    "who": "Members",
    "localized_location": "Epsom, United Kingdom",
    "state": "N7",
    "country": "gb",
    "region": "en_US",
    "timezone": "Europe/London"
   },
   "link": "https://www.meetup.com/Epsom-Social-Group/events/267449727/",
   "description": "<p>Friday night is soul night<br/>Free entry</p> <p><a href='http://www.whitelionsw16.co.uk' class='linkified'>http://www.whitelionsw16.co.uk</a><br/>In light of recent events I am rescheduling this event</p> ",
   "visibility": "public",
   "member_pay_fee": false
  }
  expect(EventWrapper.find('.EventTime')).toBe('21:00');
 });

 test('Mock data renders correct event description', () => {
  const event = {
   "created": 1577461394000,
   "duration": 7200000,
   "id": "267449727",
   "name": "Soul night ",
   "date_in_series_pattern": false,
   "status": "upcoming",
   "time": 1585342800000,
   "local_date": "2020-03-27",
   "local_time": "21:00",
   "updated": 1580753712000,
   "utc_offset": 0,
   "waitlist_count": 0,
   "yes_rsvp_count": 12,
   "venue": {
    "id": 25565312,
    "name": " The Streatham Soul Club ",
    "lat": 51.43070983886719,
    "lon": -0.1297149956226349,
    "repinned": false,
    "address_1": "232 Streatham High Road London ",
    "city": "SW16 1BB",
    "country": "gb",
    "localized_country_name": "United Kingdom"
   },
   "group": {
    "created": 1283352783000,
    "name": "Epsom Meetup Group",
    "id": 1700109,
    "join_mode": "open",
    "lat": 51.310001373291016,
    "lon": -0.23999999463558197,
    "urlname": "Epsom-Social-Group",
    "who": "Members",
    "localized_location": "Epsom, United Kingdom",
    "state": "N7",
    "country": "gb",
    "region": "en_US",
    "timezone": "Europe/London"
   },
   "link": "https://www.meetup.com/Epsom-Social-Group/events/267449727/",
   "description": "<p>Friday night is soul night<br/>Free entry</p> <p><a href='http://www.whitelionsw16.co.uk' class='linkified'>http://www.whitelionsw16.co.uk</a><br/>In light of recent events I am rescheduling this event</p> ",
   "visibility": "public",
   "member_pay_fee": false
  }
  expect(EventWrapper.find('.EventTime')).toBe("<p>Friday night is soul night<br/>Free entry</p> <p><a href='http://www.whitelionsw16.co.uk' class='linkified'>http://www.whitelionsw16.co.uk</a><br/>In light of recent events I am rescheduling this event</p> ");
 });
});