import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="side-bar-left">
            <div className="side-bar-left-top">
              <ul>
                <li>
                  <Link to="/createevent">Add Event</Link>
                </li>
                <li>
                  <Link to="/">Events</Link>
                </li>
              </ul>
                
                {/*<a href="#" className="event">Events</a> 
                <a href="#" className="upcomming">upcomming events</a> 
                <a href="#" className="past">past events</a> 
                <a href="#" className="timline"> timeline</a>
    <a href="#" className="profile">profile</a> 
            </div>
            <div className="side-bar-left-bottom">
                <a href="#" className="seetings">settings</a> 
                <a href="#" className="contact">contact-us</a> 
    <a href="#" className="terms">terms</a>  */}
            </div>
        </div>
      <div className="content-window">
    </div>
    </div>
    )
  }
}

export default Sidebar;