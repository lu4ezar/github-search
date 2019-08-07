import { connect } from 'react-redux';
import List from '../components/List';

const mapStateToProps = state => ({
	data: state.data,
	error: state.error
});

export default connect(
	mapStateToProps,
	null
)(List);
