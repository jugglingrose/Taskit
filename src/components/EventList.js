import React from 'react';
import IndividualEvent from './IndividualEvent';

/* The event list will display all of our current events.  From here, the organizer can select an event to view*/
class EventList extends React.Component {
  render(){
    var events = this.props.events;
    return(
      <div>
        <h1>Events</h1>
        <h2>Event List</h2>
        {/* We use .map() to render an IndividualEvent Component for each of the events.  Events are stored
        inside our events state, which resides in App.js */}
        {
          events.map((event, id) => <IndividualEvent key={id} id={id} details={this.props.events[id]} /> )
        }
          
      </div>
      
    )
  }
}

export default EventList;