import { combineReducers } from 'redux';
import data from './dataReducer';
import query from './queryReducer';
import loading from './loadingReducer';
import error from './errorReducer';

export default combineReducers({
	data,
	query,
	loading,
	error
});
