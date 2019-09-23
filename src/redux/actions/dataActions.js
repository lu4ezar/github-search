import { FETCH_DATA_SUCCESS } from './actionTypes';

const requestDataSuccess = data => ({
	type: FETCH_DATA_SUCCESS,
	data
});

export default requestDataSuccess;
