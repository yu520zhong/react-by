import React, { Component, PropTypes } from 'react';


class boxs extends Component{

  render(){
    const {onIncrement,onIncrements,counter} = this.props;
     return(
        <div>
          <p>{counter}</p>
          <button style={{background:'red'}} onClick={onIncrement}>+</button>
          <button onClick={onIncrements}>-</button>
        </div>
      )
  }

}


export default boxs