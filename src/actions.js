import {
    CHANGE_SEARCH_FIELD,
    REQUEST_DATA_PENDING,
    REQUEST_DATA_SUCCESS,
    REQUEST_DATA_FAILED,
    CHANGE_SEARCH_TYPE
 } from './constants';


export const setSearchField = (text) => ({ type: CHANGE_SEARCH_FIELD, payload: text });

export const makeDataRequest = (type) => (dispatch) => {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    dispatch({ type: REQUEST_DATA_PENDING });
    fetch(`${proxy}http://dnd5eapi.co/api/${type}`)
        .then(data => data.json())
        .then(data => dispatch({ type: REQUEST_DATA_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_DATA_FAILED, payload: error }))
}

export const changeSearchType = (searchType) => ({type: CHANGE_SEARCH_TYPE, payload: searchType}); 