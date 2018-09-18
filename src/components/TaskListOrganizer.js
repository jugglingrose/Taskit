import React from 'react';
import IndividualTask from './IndividualTask';

class TaskListOrganizer extends React.Component {
 

  componentDidMount(){  
    console.log('component did mount');
    this.props.loadCurEvent(this.props.match.params.id);
  }

  render(){
    var id = this.props.match.params.id;
    var tasks = this.props.events[id].tasks;
    console.log("this is our current event:" + this.props.cur_event);
    return(
      <div>
      <h1>{this.props.events[id].name}</h1>
      <h2>{this.props.events[id].location}</h2>
      <h3>Task List</h3>
        {
          tasks.map((task, idx) => <IndividualTask key={id} id={id} details={this.props.events[id].tasks[idx]} /> )
        }

     
      </div>
      
    )
  }
}

export default TaskListOrganizer;