import React from 'react';
import { Link } from 'react-router-dom';

/* This is the component where the organizer will create an event */

class CreateEvent extends React.Component {
  render(){
    return(
      <div>
       Event Name: 
       <br/>
       <input name="event_name" placeholder="women who code hackathon" onChange={this.props.eventChange("event_name")}></input>
       <br/>
       Event Date:
       <br/>
       <input name="date" placeholder="mm/dd/yy" onChange={this.props.eventChange("date")}></input>
       <br/>
       Location:
       <br/>
       <input name="location" placeholder="Capitol Factory" onChange={this.props.eventChange("location")}></input>
       <Link to='/add'><button>Add Task</button></Link>
      </div>
      
      
      
    )
  }
}

export default CreateEvent;