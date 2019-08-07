// @flow
import React from 'react';
import Spinner from 'react-spinkit';
import styled from 'styled-components';
import type { Query } from '../types/query';
import type { LoadingState } from '../types/loading';
import ListContainer from '../containers/ListContainer';

const Container = styled.div`
	font-family: 'Playfair Display', serif;
	background: #f7f0f0;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	padding: 0 5em 3em 5em;
	height: 100%;
	@media (min-width: 768px) and (max-width: 1439px) {
		width: 60%;
	}
	@media (min-width: 1440px) {
		width: 40%;
	}
	box-sizing: border-box;
	border: 1px solid black;
	box-shadow: 12px 12px 2px 1px;
`;
const SearchPanel = styled.div`
	margin-top: -1em;
	margin-bottom: 1em;
	display: inline-flex;
	align-items: center;
`;
const StyledSpinner = styled(Spinner)`
	color: #972d16;
	&.not_loading {
		visibility: hidden;
	}
`;
const StyledInput = styled.input`
	font-size: 1em;
	box-shadow: 6px 6px 2px 1px;
`;

type Props = {
	query: Query,
	isLoading: LoadingState,
	updateQuery: (event: SyntheticInputEvent<HTMLInputElement>) => void
};

const App = ({ query, isLoading, updateQuery }: Props) => {
	const handleChange = event => {
		updateQuery(event.target.value);
	};

	return (
		<Container>
			<h1>Search for projects on GitHub</h1>
			<SearchPanel>
				<StyledSpinner
					name='pulse'
					className={isLoading ? '' : 'not_loading'}
				/>
				<StyledInput
					placeholder='start here'
					value={query}
					onChange={handleChange}
				/>
			</SearchPanel>
			<ListContainer />
		</Container>
	);
};

export default App;
