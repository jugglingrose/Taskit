import React from 'react';
import Breakdown from './Breakdown';
/*This component is where the organizer will add and edit tasks*/

class Task extends React.Component {
  render(){
    return(
      <div>
       <br/>
       Task:
       <br/>
       <input title="Task" onChange={this.props.taskChange("task_name")}></input>
       <br/>
       Description:
       <br/>
       <input title="Description" onChange={this.props.taskChange("description")}></input>
       <br/>
       Breakdown:
       <br/>
       <Breakdown taskChange={this.props.taskChange}/>
       <br/>
       # of Openings:
       <br/>
       <input title="number_of_openings" onChange={this.props.taskChange("number_of_openings")}></input>
       <br/>
       Priority:
       <br/>
       <input onChange={this.props.taskChange("priority")}></input>
       <br/>
      </div>  
    )
  }
}

export default Task;