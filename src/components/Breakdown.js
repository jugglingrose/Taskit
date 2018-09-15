/* This is just an input component for the breakdown or sub tasks */ 

import React from 'react';

class Breakdown extends React.Component{
  render() {
    return(
      <div>
        <input title="Breakdown" onChange={this.props.taskChange("breakdown")}></input>
      </div>
    )
  }
}

export default Breakdown;