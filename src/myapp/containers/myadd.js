import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import only from './mystyle/only.scss'
import styles from './mystyle/myadd.scss'
import {myservers,myserveradd} from './seraction'

class Aremover extends Component{



	render(){
		return(
			<div>
				<ul>
					{this.props.myrever.map((todu,i)=>{
						return(
							<li key={i}>
								<span>{todu.title}</span>
								<em>删除</em>
							</li>
							)
					})}
				</ul>
				<button onClick={this.myserver.bind(this)}>数据请求按钮</button>
				
			</div>
			)
	}

	removers(){
		
	}

	myserver(){
		this.props.dispatch(myservers())
	}
}

const ADDserver = (state)=>{
	return{
		myrever:state.Myremoves,
		myrevesr:state.myserveradd
	}
}

export default connect(ADDserver)(Aremover)