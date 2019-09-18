// @flow
import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import type { IsErrorType } from '../types/isError';
import type { DataArray } from '../types/data';

const StyledList = styled.div`
	height: 100%;
	width: 100%;
	border: thick double black;
	overflow: auto;
	background: #fcfafa;
`;

type Props = {
	isError: IsErrorType,
	data: DataArray
};

const List = ({ data, isError }: Props) => (
	<StyledList>
		{/* isError ? (
			<p>error, try again</p>
		) : data && data.length ? (
			data.map(({ id, ...rest }) => <Project key={id} {...rest} />)
		) : null */}
		{isError && <p>{isError}</p>}
		{data.length
			? data.map(({ id, ...rest }) => <Project key={id} {...rest} />)
			: null}
	</StyledList>
);

export default List;
