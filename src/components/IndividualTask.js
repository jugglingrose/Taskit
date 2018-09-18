import React from 'react';
import { Link } from 'react-router-dom';

/*This component is for each individual task that will be displayed in the TaskListOrganizer.js  This will 
display the task name in addition to providing buttons and links for editing and deleting the selected task.
Note that when we want to edit/delete a task we include an id. This way React knows which task it needs to edit
or delete */
class IndividualTask extends React.Component{
 
  render(){
    return(
      <div>
        <p>{this.props.details.name}</p>
        <Link to={"/edit/" + this.props.id}>
          <button>
            <i className="fa fa-pencil"></i>
          </button>
        </Link>
        <button onClick={this.props.delete}>
            <i className="fa fa-trash"></i>
          </button>
      </div>
      
    )
  }
}

export default IndividualTask;