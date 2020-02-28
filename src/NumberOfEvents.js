import React, { Component } from 'react';

class NumberOfEvents extends Component {
 state = {
  eventNumberDisplayed: 32,
 }

 handleInputChanged = (event) => {
  const value = event.target.value;
  this.setState({ eventNumberDisplayed: value });
 }

 render() {
  return (
   <div className="EventNumberBox">
    <label>Number of events displayed: </label>
    <input
     type="text"
     id="EventNumberBox_Input"
     value={this.state.eventNumberDisplayed}
     onChange={this.handleInputChanged}>
    </input>
   </div>
  )
 }
}

export default NumberOfEvents;