import React from 'react';
import { Link } from 'react-router-dom';
import IndividualTask from './IndividualTask';

  
 class CreateEvent extends React.Component {
      
        render(){
            console.log("current event" , this.props.cur_event);
            const tasks = this.props.cur_event.tasks;
          return(
            <div className="content-window">
              <div className="add-event">
                 
                  <div className="input">
                      <h2>Event Name:</h2>
                      <br />
                      <input value={this.props.cur_event.name} name="event_name" type="Name" onChange={this.props.eventChange("name")} />
                   </div>

                  <div className="input">
                      <h2 className="yourMom">Event Date:</h2>
                      <br />
                      <input value={this.props.cur_event.date} name="date" placeholder="mm/dd/yy" type="date" onChange={this.props.eventChange("date")} />
                  </div>

                  <div className="input">
                      <h2 className="yourMom">Location:</h2>
                      <br />
                      <input value={this.props.cur_event.location} name="location" placeholder="Enter location of event." onChange={this.props.eventChange("location")} /> 
                  </div>
                  <div className="input">
                    <h2 className="yourMom">Tasks:</h2>
                      <br />

                  {
                      tasks.map((task, idx) => 
                          <IndividualTask idx={idx} key={idx} details={this.props.cur_event.tasks[idx]} />
                      )
                  }

                  <button onClick={() => this.props.history.push("/add")} >Add Task </button>
                  </div>
                  <div>
                  { this.props.match.params.id ?
                 (<button>Edit</button>)
                 : (<button onClick={() => { this.props.addEvent() ; this.props.history.push("/"); }}>Save Event</button>)
              }
                  </div>

                

                
              </div>
              
              
        </div>
        
        )
      }
   }

export default CreateEvent;
