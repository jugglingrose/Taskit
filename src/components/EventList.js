import React from 'react';
import IndividualEvent from './IndividualEvent';
import PropTypes from 'prop-types';

/* The event list will display all of our current events.  From here, the organizer can select an event to view*/
class EventList extends React.Component {
  render(){
    var events = this.props.events;
    return(
      <div>
        <h1>Organization Name</h1>
        <h2>List Of Events:</h2>
        {/* We use .map() to render an IndividualEvent Component for each of the events.  Events are stored
        inside our events state, which resides in App.js */}
        {
          events.map((event, id) => <IndividualEvent key={id} id={id} details={this.props.events[id]} deleteEvent={this.props.deleteEvent} /> )
        }          
      </div>     
    )
  }
}

EventList.propTypes = {
  events: PropTypes.array,
  deleteEvent: PropTypes.func,
}

export default EventList;