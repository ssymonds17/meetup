import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: '',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });

    if (value < 1) {
      this.setState({
        infoText: 'Please input a number equal to or greater than 1.',
      });
    } else {
      this.setState({
        infoText: '',
      });
      this.props.updateEvents(null, null, value);
    }
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
        < ErrorAlert text={this.state.infoText} />
      </div>
    )
  }
}

export default NumberOfEvents;