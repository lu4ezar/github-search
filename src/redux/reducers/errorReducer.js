import {
	REQUEST_DATA,
	REQUEST_DATA_SUCCESS,
	REQUEST_DATA_FAILURE
} from '../actions/actionTypes';

const errorReducer = (state = false, action) => {
	switch (action.type) {
		case REQUEST_DATA_FAILURE:
			return true;
		case REQUEST_DATA:
		case REQUEST_DATA_SUCCESS:
			return false;
		default:
			return state;
	}
};
export default errorReducer;
