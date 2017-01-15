import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {VisibilityFilters,addTodo,completeTodo,setVisibilityFilter} from './myaction'
import Addtodo from './myaddtodo'
class App extends Component{
	render(){
		const { dispatch, visibleTodos, visibilityFilter } = this.props
		return(
			<div>
			<Addtodo
	          onAddClick={text =>
	            dispatch(addTodo(text))
	          } />
	          </div>
			)
	}
}


const select = (state)=>{
  return {
    visibilityFilter: state.visibilityFilter
  }
}


export default connect(select)(App)