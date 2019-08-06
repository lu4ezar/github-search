import { REQUEST_DATA_SUCCESS } from './actionTypes';

const requestDataSuccess = data => ({
	type: REQUEST_DATA_SUCCESS,
	data
});

export default requestDataSuccess;
