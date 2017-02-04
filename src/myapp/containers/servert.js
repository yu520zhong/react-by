import {combineReducers} from 'redux' //数据合并
import {ADD_TODO,VisibilityFilters} from './seraction'
const mytops = VisibilityFilters



function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case ADD_TODO:
      return action.isMarked
    default:
      return state
  }
}

const addcpp = (state = mytops,action) => {
	switch (action.type) {
    case 'INCREMENT_COUNTERA':
      return (
          state = action.text
      )
    default:
      return state
  }
}



const todoApp = combineReducers({
  visibilityFilter,
  addcpp
})

export default todoApp

