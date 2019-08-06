// @flow
import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import type { ErrorType } from '../../types/error';
import type { DataType } from '../../types/data';

const StyledList = styled.div`
	height: 100%;
	width: 100%;
	border: thick double black;
	overflow: auto;
	background: #fcfafa;
`;

type Props = {
	error: ErrorType,
	data: DataType
};

const List = ({ data, error }: Props) => (
	<StyledList>
		{error && <p>error, try again</p>}
		{!error && Array.isArray(data)
			? data.map(item => {
					const { id, ...rest } = item;
					return <Project key={id} {...rest} />;
			  })
			: null}
	</StyledList>
);

export default List;
