import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    this.props.updateEvents(null, null, value);
  }

  render() {
    return (
      <div className="EventNumberBox">
        <label>Show&nbsp;
        <input
            type="text"
            id="EventNumberBox_Input"
            className="number"
            value={this.state.numberOfEvents}
            onChange={this.handleInputChanged}>
          </input>
          &nbsp;events</label>
      </div>
    )
  }
}

export default NumberOfEvents;