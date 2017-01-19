import React, { Component, PropTypes } from 'react'
import todo from './todo'



export default class TodoList extends Component {
  render() {
    return (
      <ul>
       	{this.props.todo.map((todos,indx) => {
       		return(
       			<li key={indx}>{todos.test}</li>
       			)
       	})}
      </ul>
    )
  }
}

