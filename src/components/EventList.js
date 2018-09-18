import React from 'react';
import IndividualEvent from './IndividualEvent';

class EventList extends React.Component {
  render(){
    console.log(this.props.events);
    var events = this.props.events;
    return(
      <div>
        <h1>Events</h1>
        <h2>Event List</h2>
        <p>This is where our events will be listed</p>
        {
          events.map((event, id) => <IndividualEvent key={id} id={id} details={this.props.events[id]} /> )
        }
          
      </div>
      
    )
  }
}

export default EventList;