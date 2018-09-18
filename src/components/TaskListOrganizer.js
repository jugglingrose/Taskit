import React from 'react';
import IndividualTask from './IndividualTask';

/* This component is where the Organizer can view the event details plus they can manage the tasks
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
        <h2>{this.props.events[id].location}</h2>
        <h3>Task List</h3>
          {
            tasks.map((task, idx) => <IndividualTask key={idx} idx={idx} delete={this.props.delete} details={this.props.events[id].tasks[idx]} /> )
          }
      </div>   
    )
  }
}

export default TaskListOrganizer;