import React, { Component } from 'react';

class Event extends Component {
 state = {
  showDetails: false,
 }

 handleShowDetails = () => {
  this.setState({ showDetails: true });
 }

 handleHideDetails = () => {
  this.setState({ showDetails: false });
 }

 render() {
  const showDetails = this.state.showDetails;

  return (
   <div className="Event">
    <div className="EventOverview">
     <p className="EventName">
      {this.props.event.name}
     </p>
     <p className="EventDate">
      {this.props.event.local_date}
     </p>
     <p className="EventTime">
      {this.props.event.local_time}
     </p>
     <button onClick={this.handleShowDetails}>
      Show More
     </button>
    </div>
    {showDetails &&
     <div className="EventDescriptionContainer">
      <p className="EventDescription">
       {this.props.event.description}
      </p>
      <button onClick={this.handleHideDetails}>
       Show Less
      </button>
     </div>
    }
   </div>
  );
 }
}

export default Event;