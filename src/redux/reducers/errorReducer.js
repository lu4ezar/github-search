import {
	REQUEST_DATA,
	REQUEST_DATA_SUCCESS,
	REQUEST_DATA_FAILURE
} from '../actions/actionTypes';

const errorReducer = (state = '', action) => {
	switch (action.type) {
		case REQUEST_DATA_FAILURE:
			return action.error;
		case REQUEST_DATA:
		case REQUEST_DATA_SUCCESS:
			return '';
		default:
			return state;
	}
};
export default errorReducer;
