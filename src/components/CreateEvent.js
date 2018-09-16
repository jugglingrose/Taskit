import React from 'react';
//import { Link } from 'react-router-dom';

  
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

                  <div className="button">
                      <h2>Add task to your event</h2>
                  </div>
              </div>
        </div>
        
        )
      }
   }

export default CreateEvent;
