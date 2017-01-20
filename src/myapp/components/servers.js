import {combineReducers} from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters,SWITCH_SUPPORT} from './myaction'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case COMPLETE_TODO:
      return action.text
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return [
        ...state,
        {
          test: action.isMarked,
          completed: false
        }
      ]
    case ADD_TODO:
      return [
        ...state.slice(0, action.index),//cha xun  slice de yi si
        Object.assign({}, state[action.index], { //
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}


function swit(state = [],action){
  switch (action.type) {
    case SWITCH_SUPPORT:
    return [
      ...state,
      {
        test:action.txt
      }
    ]
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  swit
})

export default todoApp