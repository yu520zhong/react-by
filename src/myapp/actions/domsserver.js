import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import chenshi from './doms'


const myapp = (state) =>{  //给予数据在渲染层的

	return{
		counter: state.addcp
	}
}



const onIncrement =() => {
   return{
   	 type: "INCREMENT_COUNTER"
   	}
   }

const onIncrements =() => {
   return{
   	 type: "DECREMENT"
   	}
   }


function mapDispatchToProps(dispatch) {
  return {
		onIncrement: bindActionCreators(onIncrement, dispatch),
		onIncrements: bindActionCreators(onIncrements, dispatch)
	}
}
export default connect(myapp,mapDispatchToProps)(chenshi)
