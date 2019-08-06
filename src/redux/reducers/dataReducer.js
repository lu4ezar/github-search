import { REQUEST_DATA_SUCCESS } from '../actions/actionTypes';

const dataReducer = (state = [], action) => {
	switch (action.type) {
		case REQUEST_DATA_SUCCESS:
			return action.data;
		default:
			return state;
	}
};
export default dataReducer;
