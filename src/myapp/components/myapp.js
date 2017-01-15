import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {VisibilityFilters,addTodo,completeTodo,setVisibilityFilter} from './myaction'
import AddTodo from './myaddtodo'
class App extends Component{
	render(){
		<AddTodo
			onAddClick={text=>{ //处理 按钮 并且获取valuen内容
				dispatch(addTodo(text))
			}}
		>

		<todulist
			

		/>

	}
}
