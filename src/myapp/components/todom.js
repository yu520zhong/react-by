import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {getCollectedTopics} from './myaction'
import fetch from 'isomorphic-fetch'
import { Link} from 'react-router';
import style from'../../styles/index.css';


const tabs = [
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


class TabsControl extends Component{

     constructor(){
      super();
      this.state={
        curr : 2
      }
     }

    boximdex(index){
      this.setState({
        curr:index
      })
    }

     render(){
        return(
          <div>
            <div>
              {tabs.map((todos,i)=>{
                return(
                    <div onClick={this.boximdex.bind(this,i)}  className={i==this.state.curr?"Tab_tittle active" : "Tab_tittle"} key={i}>{todos.title}</div>
                  )
              })}
            </div>

            <div>
                {React.Children.map(this.props.children,(loto,k)=>{
                   return(
                      <div key={k} className={k==this.state.curr?"Tab_item show" : "Tab_item"}>{loto}</div>
                    )
                })}
            </div>
          </div>
          )
     }

}




class TabComponent extends Component{

  render(){
    const mus= this.props.children
    return(
        <div>
   
          <div className="container">
              
          <TabsControl lost={mus}>

            <div name="first">
              我是第一帧
            </div>
            <div name="second">
              我是第二帧
            </div>
            <div name="third">
              我是第三帧
            </div>
            <div name="third1">
              我是第4帧
            </div>
            <div name="third2">
              我是第5帧
            </div>

          </TabsControl>

          </div>
        </div>
      );
  }
}


const apphebing = (state) => {
	return{
		modoss:state.swit
	}
}

export default connect(apphebing)(TabComponent)




