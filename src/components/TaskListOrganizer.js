import React from 'react';
import IndividualTask from './IndividualTask';

class TaskListOrganizer extends React.Component {
  render(){
    var tasks = this.props.cur_event.tasks;
    console.log(tasks);
    return(
      <div>
       <h2>Task List</h2>
       {
         tasks.map((task, id) => <IndividualTask id={id} details={this.props.cur_event.tasks[id]} /> )
       }
      
      </div>
      
    )
  }
}

export default TaskListOrganizer;