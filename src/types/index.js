// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { DataState, DataAction } from './data';
import type { SearchStringState, SearchStringAction } from './searchString';
import type { LoadingState, LoadingAction } from './loading';
import type { ErrorState, ErrorAction } from './error';

export type ReduxInitAction = { type: '@@INIT' };

export type State = DataState & SearchStringState & LoadingState & ErrorState;

export type Action =
	| ReduxInitAction
	| DataAction
	| SearchStringAction
	| LoadingAction
	| ErrorAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
