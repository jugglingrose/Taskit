/* This is just an input component for the breakdown or sub tasks */ 

import React from 'react';

class Breakdown extends React.Component{
  keyPress = (e) => {
    if(e.keyCode === 13){
      console.log('enter pressed');
      this.props.appendInput('breakdown'); 
    }
    return;
  }

  render() {
    console.log(this.props.id);
    return(
      <div>
        <input value={this.props.breakdown} onKeyDown={this.keyPress} onChange={this.props.arrayChange("breakdown", this.props.id)}></input>
      </div>
    )
  }
}

export default Breakdown;