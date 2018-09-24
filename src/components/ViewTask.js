import React from 'react';

/* This component displays the selected task */
class ViewTask extends React.Component{
  
  componentDidMount(){
    /*based on the id received in the url.  We want to load the matching task into our cur_task state*/
    this.props.loadCurTask(this.props.match.params.id);
  }

  render(){  
    return(
      <div>
        <h1>{this.props.cur_task.name}</h1>
        <h3>Description:</h3>
        <p>{this.props.cur_task.desc}</p> 
        <p><b>Number Of Openings:</b> {this.props.cur_task.number_of_openings}</p>
    
        <p><b>Priority:</b> {this.props.cur_task.priority}</p>
      
      </div>
    )
  }
}

export default ViewTask;