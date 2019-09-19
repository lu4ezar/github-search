import { combineReducers } from 'redux';
import data from './dataReducer';
import query from './queryReducer';
import isLoading from './loadingReducer';
import error from './errorReducer';

export default combineReducers({
	data,
	query,
	isLoading,
	error
});
