import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import '../../styles/tow.css'
import AddTodo from './buttons'

class Denglu extends Component{  //组建嵌套
	render(){
		return(
			<div>
				<div className='headerinput'>
					<input  type='text' ref='names'/>
					<input  type='text'/>
					<AddTodo lost={'取消'}/>
					{console.log(this.props.post)}
				</div>
			</div>
			)
	}
}



class App extends Component{

	constructor(){
		super();
		const myHeight = document.body.clientHeight||document.documentElement.clientHeight
		this.state={
			heights:myHeight
		}
	}

	render(){
		return(
			<div style={{height:this.state.heights}} className={'oneapp'}>
				<div className='myheader'></div>
				<Denglu post={this.state.heights}/>
			</div>

			)
	}





}


const seractions =(state)=>{
	return{
		onname:state.onserver
	}
}



export default connect(seractions)(App)