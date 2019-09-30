// @flow
import { connect } from 'react-redux';
import App from '../components/App';
import updateSearchString from '../redux/actions/searchStringActions';
import type { Dispatch } from '../types/index';
import type { SearchString } from '../types/searchString';
import { FETCH_DATA_START } from '../redux/actions/actionTypes';

const updateSearchStringCheckLength = (searchString: SearchString) => (dispatch: Dispatch) => {
	dispatch(updateSearchString(searchString));
	if (searchString.length > 2) {
		dispatch({ type: FETCH_DATA_START });
	}
};

const mapStateToProps = state => ({
	searchString: state.searchString,
	isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	updateSearchString: (value: SearchString) => dispatch(updateSearchStringCheckLength(value))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
