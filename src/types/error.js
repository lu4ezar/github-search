// @flow
export type ErrorType = boolean;

export type ErrorActions = 'UPDATE_ERROR_STATE';

export type ErrorAction = {
	type: ErrorActions,
	value: ErrorType
};

export type ErrorState = { +value: ErrorType };
