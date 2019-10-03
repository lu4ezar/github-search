// @flow
import React from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import Project from './Project';
import type { ErrorType } from '../types/error';
import type { DataArray } from '../types/data';

const StyledList = styled.div`
	height: 100%;
	width: 100%;
	border: thick double black;
	overflow: auto;
	background: #fcfafa;
`;

type Props = {
	error: ErrorType,
	data: DataArray,
	fetchNextPage: () => void
};

const debounceOnScroll = fn => {
	const debounced = debounce(fn, 300);
	return event => {
		event.persist();
		return debounced(event);
	};
};

const List = ({ data, error, fetchNextPage }: Props) => {
	const onScroll = e => {
		const { scrollHeight, scrollTop, clientHeight } = e.target;
		const closeToBottom = scrollHeight - scrollTop <= clientHeight * 2;
		if (closeToBottom) {
			fetchNextPage();
		}
	};
	return (
		<StyledList onScroll={debounceOnScroll(onScroll)}>
			{data.map(({ id, ...rest }) => <Project key={id} {...rest} />)}
			{error && <p>Error: {error}</p>}
		</StyledList>
	);
};

export default List;
