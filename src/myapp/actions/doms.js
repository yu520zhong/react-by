import React, { Component, PropTypes } from 'react';


class boxs extends Component{

  render(){
    const {onIncrement,onIncrements,counter,mast} = this.props;
    console.log(counter[1])
     return(
        <div>
          <p>{counter.text}</p>
          <p>{mast}</p>
          <button style={{background:'red'}} onClick={onIncrement}>+</button>
          <button onClick={onIncrements}>-</button>
        </div>
      )
  }

}


export default boxs