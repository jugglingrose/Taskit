import React from "react";
import VolunteerTask from "./VolunteerTask";

class VolunteerTaskList extends React.Component{
  render(){
    var tasks = this.props.cur_event.tasks;
    return(
      <div>
        <p>This is where the volunteer task list will be displayed:</p>
        {
          tasks.map((task, id) => <VolunteerTask key={id} id={id} details={this.props.cur_event.tasks}/>)
        }
      </div>
    )
  }
}

export default VolunteerTaskList;