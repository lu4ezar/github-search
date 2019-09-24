import { combineReducers } from 'redux';
import data from './dataReducer';
import searchString from './searchStringReducer';
import isLoading from './loadingReducer';
import error from './errorReducer';

export default combineReducers({
	data,
	searchString,
	isLoading,
	error
});
