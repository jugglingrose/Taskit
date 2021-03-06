import React from 'react';
import IndividualTask from './IndividualTask';
import PropTypes from 'prop-types';

  
 class CreateEvent extends React.Component {
        /*Once the component is mounted, we want to see if a parameter was passed in the url/:id.*/
        componentDidMount(){
            var id = this.props.match.params.id;
            /*If no id, we are creating a new event*/
            if(id===undefined){
               this.props.createBlankEvent();
            /*If an id exists, this is an existing event.  We need to use the id to load the matching event into our cur_event state*/
            }else{
                this.props.loadCurEvent(id);
            }  
        }    
      
        render(){
        const tasks = this.props.cur_event.tasks;
          return(
            <div className="content-window">
              <div className="add-event">    
                  <div className="input">
                      <h2>Event Name:</h2>
                      <input value={this.props.cur_event.name} name="event_name" type="Name" onChange={this.props.eventChange("name")} />
                   </div>

                  <div className="input">
                      <h2 className="yourMom">Event Date:</h2>
              
                      <input value={this.props.cur_event.date} name="date" placeholder="mm/dd/yy" type="date" onChange={this.props.eventChange("date")} />
                  </div>

                  <div className="input">
                      <h2 className="yourMom">Location:</h2>
                  
                      <input value={this.props.cur_event.location} name="location" placeholder="Enter location of event." onChange={this.props.eventChange("location")} /> 
                  </div>
                  <div className="input">
                    <h2 className="yourMom">Tasks:</h2>
            
                  {
                      tasks.map((task, idx) => 
                          <IndividualTask idx={idx} key={idx} details={this.props.cur_event.tasks[idx]} />
                      )
                  }
                  <br/>
                  <button onClick={() => this.props.history.push("/add")} >Add Task </button>
                  <br/>
                  <br/>
                  </div>
                  <div>
                  { this.props.match.params.id ?
                    (<button onClick={() => {this.props.updateEvent(this.props.match.params.id); this.props.history.push("/"); }}>Edit Event</button>)
                    : (<button onClick={() => { this.props.addEvent() ; this.props.history.push("/"); }}>Save Event</button>)
                  }
                  </div>      
              </div>       
        </div>       
        )
      }
   }

CreateEvent.propTypes = {
    addEvent: PropTypes.func,
    updateEvent: PropTypes.func,
    cur_event: PropTypes.object,
    createBlankEvent: PropTypes.func,
    loadCurEvent: PropTypes.func,
}

export default CreateEvent;
