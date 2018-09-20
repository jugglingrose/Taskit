/* Input component for the breakdowns (sub tasks) */ 
import React from 'react';

class Breakdown extends React.Component{
  /* If the user has pressed enter, an additional breakdown input field will be appended to our form
  so that the organizer can enter another breakdown.  We do so by calling appendInput which will then
  push an empty string into our breakdown array.  This will cause an empty input to appear on our form. */
  keyPress = (e) => {
    /*The key code for enter is 13*/
    if(e.keyCode === 13){
      console.log('enter pressed');
      this.props.appendInput('breakdown'); 
    }
    /* If not 13, return and run the onChange function instead */
    return;
  }

  render() {
    /* Render out each individual breakdown items as it's own input field */
    console.log(this.props.id);
    console.log(this.props.breakdown);
    return(
      <div>
        <input value={this.props.breakdown} onKeyDown={this.keyPress} onChange={this.props.arrayChange("breakdown", this.props.id)}></input>
      </div>
    )
  }
}

export default Breakdown;