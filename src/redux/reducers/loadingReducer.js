import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE
} from '../actions/actionTypes';

const isLoading = (state = false, action) => {
	switch (action.type) {
		case FETCH_DATA_START:
			return true;
		case FETCH_DATA_SUCCESS:
		case FETCH_DATA_FAILURE:
			return false;
		default:
			return state;
	}
};
export default isLoading;
