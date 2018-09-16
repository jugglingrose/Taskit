import React from 'react';

class VolunteerTask extends React.Component{
  render(){
    console.log("volunteer task");
    //console.log(this.props.details.tasks[id]);
    return(
      <div>
        <p>task name</p>
        <button><i class="fa fa-angle-down"></i></button>
     </div>
    )
  }
}

export default VolunteerTask; 