import React from 'react';
import Breakdown from './Breakdown';

/*This component is where the organizer will add and edit tasks*/

class Task extends React.Component {

  componentWillMount(){
    
  }

  componentDidMount(){   
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

    addEdit(id){
      //If this is a new task, we want to create a new task
      if(id === undefined){
        console.log("add new recipe");
        this.props.addTask(id, () => {
          
        });
       }
      //If this task already exists.  We want to update that existing task.
      else{
        this.props.updateTask(id, () => {
        });
      }
    }

  render(){

    var breakdown = this.props.cur_task.breakdown || [];
    console.log("this is breakdown" , this.props.cur_task.breakdown);

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
        { this.props.cur_task.id ? (
          <button onClick={() => {this.addEdit(this.props.cur_task)}} >Edit</button>
        ): (
          <button onClick={() => {this.addEdit(this.props.cur_task.id)}}>Add</button>
        )}       
  
     </div>  

    )
  }
}

export default Task;
