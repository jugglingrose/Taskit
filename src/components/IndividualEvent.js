import React from 'react';
import { Link } from 'react-router-dom';

/* This component is for each individual event that displays on our EventList.js.  From here, the organizer can
click on the event name and it will link them to the TaskListOrganizer.js where they can see the event details
plus edit/delete/view the tasks associated with that event.*/
class IndividualEvent extends React.Component{

  render() {
    console.log(this.props.id);
    return(
      <div>
        <Link to={"/event/" + this.props.id }>
          <p>{this.props.details.name}</p>
        </Link>
        <button><i class="fa fa-pencil"></i></button>
        <button><i class="fa fa-trash"></i></button>
      </div>
    )
  }
}

export default IndividualEvent;