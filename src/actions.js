import {
	CHANGE_SEARCH_FIELD,
	REQUEST_REBOTS_PENDING,
	REQUEST_REBOTS_SUCCESS,
	REQUEST_REBOTS_FAILED
 } from 'constants.js'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
});

// returns a function instead of an object, to let redux-thunk know there is something to do.
export const requestRobots = () => (dispatch) => {
	dispatch({ type: REQUEST_REBOTS_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => response.json() )
		.then(data => dispatch({ type: REQUEST_REBOTS_SUCCESS, payload: data }))
		.catch(error => dispatch({ type: REQUEST_REBOTS_FAILED, payload: error}));
};
