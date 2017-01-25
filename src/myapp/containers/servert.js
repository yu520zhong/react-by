import {combineReducers} from 'redux' //数据合并
import {ADD_TODO} from './seraction'




function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case ADD_TODO:
      return action.text
    default:
      return state
  }
}


export default visibilityFilter

