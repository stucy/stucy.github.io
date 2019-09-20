import {
    CHANGE_SEARCH_FIELD,
    REQUEST_DATA_PENDING,
    REQUEST_DATA_SUCCESS,
    REQUEST_DATA_FAILED,
    CHANGE_SEARCH_TYPE
 } from './constants';

 const initialStateSearchType = {
   type : 'classes'
}


export const changeType = (state=initialStateSearchType, action={}) => {
  //   console.log(action);
  switch (action.type) {
    case CHANGE_SEARCH_TYPE:
      return {...state, type: action.payload}
    default:
      return state
  }
}
  
  const initialStateSearch = {
    searchField: ''
  }
  
  export const Search = (state=initialStateSearch, action={}) => {
    //   console.log(action);
    switch (action.type) {
      case CHANGE_SEARCH_FIELD:
        return {...state, searchField: action.payload}
      default:
        return state
    }
  }
  
  
  const initialStateData = {
    data: {},
    isPending: true
  }
  
  export const requestData = (state=initialStateData, action={}) => {
    switch (action.type) {
      case REQUEST_DATA_PENDING:
        return Object.assign({}, state, {isPending: true})
      case REQUEST_DATA_SUCCESS:
        return Object.assign({}, state, {data: action.payload, isPending: false})
      case REQUEST_DATA_FAILED:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    }
  }