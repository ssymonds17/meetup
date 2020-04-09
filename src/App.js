import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './Alert';
import { getEvents } from './api';

class App extends Component {

  componentDidMount() {
    getEvents().then(response => this.setState({ events: response }));
    if (!navigator.onLine) {
      this.setState({ warningText: 'Events are loaded from your last visit. Please connect to the internet to view up-to-date events.' });
    } else {
      this.setState({ warningText: '' });
    }
  }

  state = {
    events: [],
    page: null,
    lat: null,
    lon: null,
    warningText: ''
  }

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(response => this.setState({ events: response, lat, lon }));
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(response => this.setState({ events: response, page }));
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(response => this.setState({ events: response }));
    }
  }

  render() {
    return (
      <div className="App">
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.events.length}
          lat={this.state.lat}
          lon={this.state.lon} />
        <CitySearch updateEvents={this.updateEvents} />
        <WarningAlert text={this.state.warningText} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;