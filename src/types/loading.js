// @flow
export type LoadingType = boolean;

export type LoadingActions = 'UPDATE_LOADING_STATE';

export type LoadingAction = {
	type: LoadingActions,
	value: LoadingType
};

export type LoadingState = { +value: LoadingType };
