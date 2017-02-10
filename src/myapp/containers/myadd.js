import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import only from './mystyle/only.scss'
import styles from './mystyle/myadd.scss'
import {myservers,myserveradd} from './seraction'

class Aremover extends Component{
	constructor(){
		super()
		this.state = {
			surr:false,
			index:null
		}
	}
	render(){
		const {myserv} = this.props
		return(
			<div>
				<ul>
					{this.props.Myremoves.map((todu,i)=>{
						return(
							<li key={i}>
								<span >{todu.title}</span>
								<em onClick={this.removers.bind(this,i)} 
									className={[styles.myem].join(' ')}>删除</em>
							</li>
							)
					})}
				</ul>
				<button style={{width:'100%',border:'none',background:'#413c5a',height:'50px',color:'#fff'}} onClick={this.myserver.bind(this)}>数据请求按钮</button>
				<ul>
					{this.state.surr?myserv&&myserv.map((todos,i,array)=>{
						return(
							 <li className={styles.myli} key={i}>{todos.title}</li>				
						)
					}):<li className={styles.myli}>数据显示地</li>}
				</ul>
			</div>
			)
	}


	removers(i){
		this.setState({
			index:i
		})
	    this.props.Myremoves.splice(i,1)
	}
	myserver(){
		this.props.dispatch(myservers())
		this.setState({surr:true})
	}
}

const ADDserver = (state)=>{
	const {Myremoves,myserveradd} = state
	const myserv = myserveradd.data
	return {Myremoves,myserv}
}

export default connect(ADDserver)(Aremover)