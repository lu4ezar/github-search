import {
	REQUEST_DATA,
	REQUEST_DATA_SUCCESS,
	REQUEST_DATA_FAILURE
} from '../actions/actionTypes';

const isLoading = (state = false, action) => {
	switch (action.type) {
		case REQUEST_DATA:
			return true;
		case REQUEST_DATA_SUCCESS:
		case REQUEST_DATA_FAILURE:
			return false;
		default:
			return state;
	}
};
export default isLoading;
