// @flow
import React from 'react';
import styled from 'styled-components';
import { FixedSizeList as WindowList } from 'react-window';
import Project from './Project';
import type { ErrorType } from '../types/error';
import type { DataType } from '../types/data';

const StyledList = styled(WindowList)`
	border: thick double black;
	overflow: auto;
	background: #fcfafa;
`;

type Props = {
	error: ErrorType,
	data: DataType
};

const List = ({ data, error }: Props) => {
	if (error) {
		return <p>error, try again</p>
	}
	return (
		data.length ?
			<StyledList
				itemData={data}
				height={950}
				itemCount={data.length}
				itemSize={150}
				width={550}
			>
				{Project}
			</StyledList> : null
	)
};

export default List;
