import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {getCollectedTopics} from './myaction'
import fetch from 'isomorphic-fetch'
import { Link } from 'react-router';
import style from'../../styles/index.css';
  


class AddTodo extends Component {

 tabs = [
      {
          title: '全部', 
          filter: 'all',
      },
      {
          title: '精华',
          filter: 'good',
      },
      {
          title: '分享',
          filter: 'share',
      },
      {
          title: '问答',
          filter: 'ask',
      },
      {
          title: '招聘',
          filter: 'job',
      }
  ]



 constructor() {
    super();
    this.state = {
      opacity:1,
      background:'red',
      curr: 0
    }
  }



componentDidMount() { //渲染完成以后调用   //调用数据AJAXss
    setInterval(function(){
      var opacityt = this.state.opacity;
      opacityt -= .05;
      if (opacityt < 0.1) {
        opacityt = 1.0;
      }
      this.setState({
        opacity: opacityt,
        background:'#ccc'
      });
    }.bind(this), 100);
  }

// componentWillMount(){  // 渲染前调用一次
//   alert("3")
// }

  handleClick(i) {
    this.setState({  //Cssa
      curr: i
    })
  }

  render() {
    const {dispatch,modoss} = this.props
    return (
      <div>
        <button onClick={()=>{
          dispatch(getCollectedTopics())
        }}>
        submit
        </button>
        
        <div>
          {
            modoss.map((lut,i)=>{
              return(
                <p key={i}>{
                  lut.test.data.map((tomps,x)=>{
                    return(
                       <li style={{width:'100%',marginTop:'10px'}} key={x}>{tomps.title}</li>
                    )
                  })
                }</p>
              )
            })
          }
        </div>

        <div>
         {this.tabs.map((tod,index)=>{
            return(
              <p key={index}
                className={[index === this.state.curr?'mst':'','mstt'].join(' ')}//class拼接或者引入cnassNames
                onClick={this.handleClick.bind(this,index)}
              >{tod.title}</p>
              )
          })}
        </div>




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




