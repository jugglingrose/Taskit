import React from 'react';
import Breakdown from './Breakdown';
/*This component is where the organizer will add and edit tasks*/

class Task extends React.Component {



  componentDidMount(){
    console.log("component did mount!");
    //
    //Change this to params at a later time instead of cur_task.id//
    //
    var id = this.props.cur_task.id;
    console.log("this is the id: " + id);

    if(id === undefined){
      console.log("edit page: recipe is undefined");
      /*we create blank recipe to load an empty form so user can then create a
      new recipe*/
      //this.props.createBlank();
    }
    else{
        console.log("edit page: recipe is defined");
        //this.props.loadRecipe(id);
      }
    }

    addEdit(id){
      if(id === undefined){
        console.log("add new recipe");
        
        }
      else{
        console.log('update recipe');
    
        };
    }


  render(){
    return(
      <div>
       <br/>
       Task:
       <br/>
       <input value={this.props.cur_task.name} title="Task" onChange={this.props.taskChange("task_name")}></input>
       <br/>
       Description:
       <br/>
       <input value={this.props.cur_task.desc} title="Description" onChange={this.props.taskChange("description")}></input>
       <br/>
       Breakdown:
       <br/>
       <Breakdown taskChange={this.props.taskChange} task={this.props.cur_task}/>
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
          <button onClick={() => {this.addEdit(this.props.cur_task.id)}} >Edit</button>
        ): (
          <button onClick={() => {this.addEdit(this.props.cur_task.id)}}>Add</button>
        )}       
    
      </div>  
    )
  }
}

export default Task;