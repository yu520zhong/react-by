import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {getCollectedTopics} from './myaction'
import fetch from 'isomorphic-fetch'
import { Link} from 'react-router';
import style from'../../styles/index.css';
import AddTodo from './addtodos'




class TabComponent extends Component{
  render(){
    const mus= this.props.children
    return(
      <div className="container">
              
        <AddTodo lost={mus}>

            <div name="first">
              我是第一帧
            </div>
            <div name="second">
              我是第二帧
            </div>
            <div name="third">
              我是第三帧
            </div>
            <div name="third">
              我是第4帧
            </div>
            <div name="third">
              我是第5帧
            </div>

        </AddTodo>

      </div>
      );
  }
}


const apphebing = (state) => {
	return{
		modoss:state.swit
	}
}

export default connect(apphebing)(TabComponent)




