import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* This component is for each individual event that displays on our EventList.js.  From here, the organizer can
click on the event name and it will link them to the TaskListOrganizer.js where they can see the event details
plus edit/delete/view the tasks associated with that event.*/
class IndividualEvent extends React.Component{
  render() {
    return(
      <div>
        <Link to={"/event/" + this.props.id }>
          <p>{this.props.details.name}</p>
        </Link>
        <Link to={"/editevent/" + this.props.id }><button><i className="fa fa-pencil"></i></button></Link>
        <button onClick={() => this.props.deleteEvent(this.props.id)}><i className="fa fa-trash"></i></button>
      </div>
    )
  }
}

IndividualEvent.propTypes = {
  id: PropTypes.number,
  deleteEvent: PropTypes.func,
}

export default IndividualEvent;