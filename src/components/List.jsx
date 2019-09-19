// @flow
import React from 'react';
import styled from 'styled-components';
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
	data: DataArray
};

const List = ({ data, error }: Props) => (
	<StyledList>
		{error ? (
			<p>{error}</p>
		) : (
			data.map(({ id, ...rest }) => <Project key={id} {...rest} />)
		)}
	</StyledList>
);

export default List;
