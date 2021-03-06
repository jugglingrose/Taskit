import React from 'react';
import Breakdown from './Breakdown';
import PropTypes from 'prop-types';

/*This component is where the organizer will add/edit tasks.*/
class Task extends React.Component {

  componentDidMount(){   
    /* we want to gather the id from our url param to use this to ensure we edit only the selected task*/
    var id = this.props.match.params.id;
    /* if id is undefined, we want a blank form*/
    if(id === undefined){
      this.props.createBlank();
    }
    /*else if id is defined, we want to load the corresponding task and pre fill our form with the task information*/
    else{
        this.props.loadCurTask(this.props.match.params.id);  
      }
  }

    /*Because the add/edit page are basically the same but with slightly different functionality.  We want
    to use the same component so we don't repeat code.  If an id is given, that means the organizer wants to 
    edit an existing task.  Therefore we implement the functionality for editing.  If no params id was given,
    it means the task does not exist, so we want to implement the functionality for adding a new task*/
    addEdit(id){
      //If this is a new task, we want to create a new task
      if(id === undefined){
        this.props.addTask();
        this.props.createBlank();
        
       }
      //If this task already exists.  We want to update that existing task.
      else{
        this.props.updateTask(id);
        this.props.history.goBack();
      }
    }

  render(){
    var breakdown = this.props.cur_task.breakdown || [];
    return(
      <div>
        <br/>
        Task:
        <br/>
        <input value={this.props.cur_task.name} title="Task" onChange={this.props.taskChange("name")}></input>
        <br/>
        Description:
        <br/>
        <input value={this.props.cur_task.desc} title="Description" onChange={this.props.taskChange("desc")}></input>
        <br/>
        Breakdown:
        <br/>
        {
          breakdown.map((item, idx) =>
          <Breakdown breakdown={item} key={idx} id={idx} arrayChange={this.props.arrayChange} task={this.props.cur_task} appendInput={this.props.appendInput}/> , this)
        }
        <br/>
        # of Openings:
        <br/>
        <input value={this.props.cur_task.number_of_openings} title="number_of_openings" onChange={this.props.taskChange("number_of_openings")}></input>
        <br/>
        Priority:
        <br/>
        <input value={this.props.cur_task.priority} onChange={this.props.taskChange("priority")}></input>
        <br/>
        { this.props.match.params.id ? (
          <button onClick={() => {this.addEdit(this.props.match.params.id)}}>Edit</button>
        ): (
          <button onClick={() => { this.addEdit(); this.props.history.goBack(); }}>Add</button>
        )}       
     </div>  
    )
  }
}

Task.propTypes = {
  cur_task: PropTypes.object,
  taskChange: PropTypes.func,
  appendInput: PropTypes.func,
  arrayChange: PropTypes.func,
  updateTask: PropTypes.func,
  addTask: PropTypes.func,
  createBlank: PropTypes.func,
  loadCurTask: PropTypes.func, 
}

export default Task;
