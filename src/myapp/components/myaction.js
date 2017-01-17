import fetch from 'isomorphic-fetch'
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SWITCH_SUPPORT = 'SWITCH_SUPPORT'


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};


export function addTodo(text) { 
  return { 
  	type: SET_VISIBILITY_FILTER, 
  	isMarked:text
  }
}

export function completeTodo(index) {
  return { 
  	type: COMPLETE_TODO, 
  	index 
  }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER1, filter }
}







function  fetchPosts(){
  return dispatch => {
      fetch('https://cnodejs.org/api/v1/topics')
      .then(response => response.json())
      .then(datas =>{
            console.log(datas)
            dispatch(
              type:SWITCH_SUPPORT,
              txt:"3333"    
              )
              }
        )  
    }
}



export function fetchPostsIfNeeded(subreddit){
  return (dispatch, getState) => {

      return dispatch(fetchPosts(subreddit))
    
  }
}

