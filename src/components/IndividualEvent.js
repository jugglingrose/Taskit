import React from 'react';
import { Link } from 'react-router-dom';

class IndividualEvent extends React.Component{

  render() {
    console.log(this.props.id);
    return(
      <Link to={"/event/" + this.props.id }>
        <p>{this.props.details.name}</p>
      </Link>
    )
  }
}

export default IndividualEvent;