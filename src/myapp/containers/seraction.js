import fetch from 'isomorphic-fetch'  //处理ajax 如不懂 请百度

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SWITCH_SUPPORT = 'SWITCH_SUPPORT'


export function addTodo(text) { 
  return { 
  	type: ADD_TODO, 
  	isMarked:text
  }
}

