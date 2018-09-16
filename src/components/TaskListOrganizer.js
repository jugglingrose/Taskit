import React from 'react';
import IndividualTask from './IndividualTask';

class TaskListOrganizer extends React.Component {
  render(){
    var tasks = this.props.cur_event.tasks;
    console.log(tasks);
    return(
      <div>
      <h1>{this.props.cur_event.name}</h1>
       <h2>Task List</h2>
       {
         tasks.map((task, id) => <IndividualTask id={id} key={id} details={this.props.cur_event.tasks[id]} delete={this.props.delete} /> )
       }
      
      </div>
      
    )
  }
}

export default TaskListOrganizer;