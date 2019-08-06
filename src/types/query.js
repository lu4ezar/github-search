// @flow
export type Query = string;

export type QueryActions = 'UPDATE_QUERY';

export type QueryAction = {
	type: QueryActions,
	value: Query
};

export type QueryState = { +value: Query };
