import React from 'react';

class Sidebar extends React.Component{
  render(){
    return(
      <div class="container">
        <div class="side-bar-left">
            <div class="side-bar-left-top">
                <a href="#" class="add-event">Add event</a> 
                <a href="#" class="upcomming">upcomming events</a> 
                <a href="#" class="past">past events</a> 
                <a href="#" class="timline"> timeline</a>
                <a href="#" class="profile">profile</a> 
            </div>
            <div class="side-bar-left-bottom">
                <a href="#" class="seetings">settings</a> 
                <a href="#" class="contact">contact-us</a> 
                <a href="#" class="terms">terms</a> 
            </div>
        </div>
        <div class="content-window">

        </div>
    </div>
    )
  }
}

export default Sidebar;