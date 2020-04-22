import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer } from 'recharts';

class Event extends Component {
 state = {
  showDetails: false,
  events: []
 }

 handleShowDetails = () => {
  this.setState({ showDetails: true });
 }

 handleHideDetails = () => {
  this.setState({ showDetails: false });
 }

 render() {
  const showDetails = this.state.showDetails;
  const event = this.props.event;
  const data = [
   { name: "Attending", value: event.yes_rsvp_count },
   { name: "Spaces Available", value: (event.rsvp_limit - event.yes_rsvp_count) }
  ];
  const colors = ["#8884d8", "#37c0ba"];


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
     {event.rsvp_limit &&
      <ResponsiveContainer height={150} width={250}>
       <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={32} label >
         {
          data.map((entry, index) => (<Cell key={`cell-${index}`} fill={colors[index]} />))
         }
        </Pie>
        <Legend iconSize={10} iconType="circle" layout="horizontal" verticalAlign="bottom" align="center" />
        <Tooltip />
       </PieChart>
      </ResponsiveContainer>
     }
     {!event.rsvp_limit &&
      <p>{event.yes_rsvp_count} people going</p>
     }
     {!showDetails &&
      <button className="details-btn" onClick={this.handleShowDetails}>Show More</button>
     }
     {showDetails &&
      <button className="details-btn" onClick={this.handleHideDetails}>Show Less</button>
     }
    </div>
    {showDetails &&
     <div className="EventDescriptionContainer">
      <p className="EventDescription" dangerouslySetInnerHTML={{ __html: this.props.event.description }} />
      <p><a href={this.props.event.link} target="_blank">Attend this meetup</a></p>
     </div>
    }
   </div>
  );
 }
}

export default Event;