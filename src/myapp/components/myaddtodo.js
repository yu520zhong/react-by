import React, { Component, PropTypes } from 'react'

export default class Addtodo extends Component{
	render(){
		return(
		<div>
			<imput tyoe='text' ref='input'/>
			<button onClick={(e) => this.handleClick(e)}>
				Add
			</button>
		</div>
			)
		}
	handleClick(e){
		 const node = this.refs.input//sheng ming input de huoqu neirong
    	 const text = node.value.trim()
    	 this.props.onAddClick(text)
    	 node.value = ''
	}
}



AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}