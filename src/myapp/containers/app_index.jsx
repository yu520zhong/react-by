import React,{Component} from 'react'

class routePrefix extends Component{

	constructor(props){
		super(props);
		this.state = {
			domHeight:''
		}
	};
	componentWillMount(){
		// document.body.addEventListener('touchmove', (ev) => {
  //           ev.preventDefault();
  //       })
		const domHeights =  document.body.clientHeight||document.documentElement.clientHeight;
			console.log('domHeights')
		this.setState({
			domHeight:domHeights
			})
	
	};

	render(){
		return(
			<div style={{height:this.state.domHeight}}>{this.props.children}</div>
			)
	}
}
//空置页面
export default routePrefix;