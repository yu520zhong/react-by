import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {VisibilityFilters,addTodo,completeTodo,setVisibilityFilter,getCollectedTopics} from './myaction'
import Addtodo from './myaddtodo'
import TodoList from './TodoList'
import { Link } from 'react-router';

class App extends Component{

	render(){
		const {dispatch,visibleTodos, visibilityFilter,Visiters} = this.props
		return(
			<div>
			<Addtodo 
	          onAddClick={text =>
	            dispatch(addTodo(text))
	          }/>
			<li><Link to="message">About</Link></li>
			<li><Link to="ppst">Aboutt</Link></li>
	 		<TodoList
	          todo = {visibleTodos}
	          />
	         	<div>{console.log(Visiters)}</div>
	          </div>
			)
	}

	componentDidMount(){
		this.props.dispatch(getCollectedTopics())
	}



}



const select = (state)=>{
  return {
    visibleTodos:state.todos,
    modoss:state.swit,
    Visiters:state.visibilityFilter
  }
}


export default connect(select)(App)