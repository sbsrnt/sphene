import { RootState } from 'app/rootReducer';
import { createSelector } from 'reselect';

import { UserState } from './SignIn/reducer';

export type AuthState = {
  user: UserState;
};

const authSelector = (state: RootState) => state.auth;

export const getUserSelector = createSelector(authSelector, (state: AuthState) => state.user);
