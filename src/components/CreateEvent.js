import React from 'react';
import { Link } from 'react-router-dom';

  
 class CreateEvent extends React.Component {
      
        render(){
          return(
            <div className="content-window">
              <div className="add-event">
                 
                  <div className="input">
                      <h2>Event Name:</h2>
                      <br />
                      <input name="event_name" type="Name" onChange={this.props.eventChange("event_name")} />
                   </div>

                  <div className="input">
                      <h2 className="yourMom">Event Date:</h2>
                      <br />
                      <input name="date" placeholder="mm/dd/yy" type="date" onChange={this.props.eventChange("date")} />
                  </div>

                  <div className="input">
                      <h2 className="yourMom">Location:</h2>
                      <br />
                      <input name="location" placeholder="Enter location of event." onChange={this.props.eventChange("location")} /> 
                  </div>

                  <Link to="/add"><button>Add Task</button></Link>
              </div>
              { this.props.match.params.id ?
                 (<button>Edit</button>)
                 : (<button onClick={() => this.props.addEvent()}>Add</button>)
              }
              
        </div>
        
        )
      }
   }

export default CreateEvent;
