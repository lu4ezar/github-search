/* eslint-disable camelcase */
import { takeLatest, call, put, select, delay } from 'redux-saga/effects';
import { REQUEST_DATA, REQUEST_DATA_FAILURE } from './actions/actionTypes';
import requestDataSuccess from './actions/dataActions';

const getQuery = state => state.query;

const getDesiredDataShape = data =>
	data.map(
		({
			id,
			name,
			html_url,
			description,
			stargazers_count,
			watchers_count
		}) => ({
			id,
			name,
			htmlUrl: html_url,
			description,
			stargazersCount: stargazers_count,
			watchersCount: watchers_count
		})
	);

function fetchData(query) {
	const url = `https://api.github.com/search/repositories?q=${query}`;
	return fetch(url)
		.then(res => {
			if (!res.ok) {
				throw new Error(`Error! ${res.statusText}`);
			}
			return res.json();
		})
		.then(json => getDesiredDataShape(json.items));
}

function* dataRequestAsync() {
	yield delay(1000);
	const query = yield select(getQuery);
	try {
		const data = yield call(() => fetchData(query));
		yield put(requestDataSuccess(data));
	} catch (error) {
		yield put({ type: REQUEST_DATA_FAILURE, error: error.message });
	}
}

function* watchDataRequest() {
	yield takeLatest(REQUEST_DATA, dataRequestAsync);
}

export default watchDataRequest;
