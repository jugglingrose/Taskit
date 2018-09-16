import React from 'react';
import { Link } from 'react-router-dom';

/*This component is for individual tasks that will be displayed in the task list*/

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