// @flow
import { connect } from 'react-redux';
import App from '../components/App';
import updateQuery from '../redux/actions/queryActions';
import type { Dispatch } from '../types/index';
import type { Query } from '../types/query';
import { REQUEST_DATA } from '../redux/actions/actionTypes';

const updateQueryCheckLength = (query: Query) => (dispatch: Dispatch) => {
	dispatch(updateQuery(query));
	if (query.length > 2) {
		dispatch({ type: REQUEST_DATA });
	}
};

const mapStateToProps = state => ({
	query: state.query,
	isLoading: state.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	updateQuery: (value: Query) => dispatch(updateQueryCheckLength(value))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
