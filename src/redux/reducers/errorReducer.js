import {
	FETCH_DATA,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE
} from '../actions/actionTypes';

const errorReducer = (state = '', action) => {
	switch (action.type) {
		case FETCH_DATA_FAILURE:
			return action.error;
		case FETCH_DATA:
		case FETCH_DATA_SUCCESS:
			return '';
		default:
			return state;
	}
};
export default errorReducer;
