import { UPDATE_QUERY } from '../actions/actionTypes';

const queryReducer = (state = '', action) => {
	switch (action.type) {
		case UPDATE_QUERY:
			return action.value;
		default:
			return state;
	}
};
export default queryReducer;
