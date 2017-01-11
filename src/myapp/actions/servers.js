import { combineReducers } from 'redux';
      	const podata = [
				  {
				    text: 'Eat food',
				    completed: true
				  }, {
				    text: 'Exercise',
				    completed: false
				  }
				]


const addcp = (state = [], action) => {
  
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return (
          podata.map((indexs,addcp)=>{
            return state = indexs.text
          })
      	)
    case 'DECREMENT':
      return "花1花"
    default:
      return state
  }
  
};



const addcpp = (state = "花花",action) => {
	switch (action.type) {
    case 'INCREMENT_COUNTER1':
      return state + 1
    default:
      return state
  }
}

const todoApp = combineReducers({
  addcpp,
  addcp
})

export default todoApp