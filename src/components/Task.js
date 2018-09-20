import React from 'react';
import Breakdown from './Breakdown';

/*This component is where the organizer will add/edit tasks.*/

class Task extends React.Component {

  componentWillMount(){ 
  }

  componentDidMount(){   
    /* we want to gather the id from our url param to use this to ensure we edit only the selected task*/
    var id = this.props.match.params.id;

    if(id === undefined){
      console.log("recipe is undefined.  Add Task");
      this.props.createBlank();
    }
    else{
        console.log("edit: recipe is defined. Edit task");
        this.props.loadCurTask(this.props.match.params.id);  
      }
  }

    /*Because the add/edit page are basically the same but with slightly different functionality.  We want
    to use the same component so we don't repeat code.  If an id is given, that means the organizer wants to 
    edit an existing task.  Therefore we implement the functionality for editing.  If no params id was given,
    it means the task does not exist, so we want to implement the functionality for adding a new task*/
    addEdit(id){
      //If this is a new task, we want to create a new task
      console.log(this.props.match.params.id);
      if(id === undefined){
        this.props.addTask();
        this.props.createBlank();
        
       }
      //If this task already exists.  We want to update that existing task.
      else{
        console.log("task is calling update task");
        this.props.updateTask(id, () => { 
          
        });
      }
    }

  render(){
    console.log('this is cur_task', this.props.cur_task);
    var breakdown = this.props.cur_task.breakdown || [];
    console.log("this is breakdown" , this.props.cur_task.breakdown);
    console.log("history:", this.props.history);
    console.log("history location array", this.props.history.location);

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

export default Task;
