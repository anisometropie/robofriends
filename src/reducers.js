import {
	CHANGE_SEARCH_FIELD,
	REQUEST_REBOTS_PENDING,
	REQUEST_REBOTS_SUCCESS,
	REQUEST_REBOTS_FAILED
 } from 'constants.js'


const initialStateSearch = {
	searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload});
			// return { ...state, searchField: action.payload };
		default:
			return state;
	}
}

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
	switch(action.type) {
		case REQUEST_REBOTS_PENDING:
			return Object.assign({}, state, {isPending: true});
		case REQUEST_REBOTS_SUCCESS:
			return Object.assign({}, state, {robots: action.payload, isPending: false});
		case REQUEST_REBOTS_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false});
		default:
			return state;
	}
}
