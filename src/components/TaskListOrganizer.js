import React from 'react';
import IndividualTask from './IndividualTask';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* This component is where the Organizer can view the event details and manage the tasks
associated with the event. */
class TaskListOrganizer extends React.Component {

  componentWillMount(){  
    /* Here we want to take the id from our url params and set our cur_event state based on this id.*/
    this.props.loadCurEvent(this.props.match.params.id);
  }

  render(){  
    var id = this.props.match.params.id;
    var tasks = this.props.events[id].tasks;
    return(
      <div>
        <h1>{this.props.events[id].name}</h1>
        <hr></hr>
        <h2>Event Details:</h2>
        <p><b>Date:</b> {this.props.events[id].date}</p>
        <p><b>Location:</b> {this.props.events[id].location}</p> 
        <h3>Task List</h3>
          {
            tasks.map((task, idx) => <IndividualTask key={idx} idx={idx} delete={this.props.delete} details={this.props.events[id].tasks[idx]} /> )
          }
        <br/>
        <Link to="/add"><button>Add Task</button></Link>
      </div>   
    )
  }
}

TaskListOrganizer.propTypes = {
  events: PropTypes.array,
  delete: PropTypes.func,
  loadCurEvent: PropTypes.func,
}

export default TaskListOrganizer;