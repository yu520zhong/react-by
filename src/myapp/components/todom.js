import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {fetchPostsIfNeeded} from './myaction'
import fetch from 'isomorphic-fetch'


	


class AddTodo extends Component {

 // my(){
 // 	  fetch('/v1/topics')
 //      .then(response => response.json())
 //      .then(data=>{
 //      	console.log(data)
 //      })   
 // }


  render() {
  	const {dispatch,modoss} = this.props
    return (
      <div>
      	<button onClick={()=>{
      		  dispatch(fetchPostsIfNeeded())
      	}}>
      	submit
      	</button>
      	<p>内容{console.log(modoss)}</p>
      </div>
    )
  }
 }

const apphebing = (state) => {
	return{
		modoss:state.swit
	}
}

export default connect(apphebing)(AddTodo)
