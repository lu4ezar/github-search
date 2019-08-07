import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/AppContainer';
import configureStore from './redux/store';
import './index.css';
import watchDataRequest from './redux/sagas';

const initialState = {
	query: '',
	data: [],
	loading: false,
	error: false
};

const store = configureStore(initialState);
store.runSaga(watchDataRequest);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
