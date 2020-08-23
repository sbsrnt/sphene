import { RootState } from 'app/rootReducer';
import { createSelector } from 'reselect';

import { ForgotPasswordState } from './ForgotPassword/reducer';
import { ResetPasswordState } from './ResetPassword/reducer';
import { UserState } from './SignIn/reducer';
import { SignUpState } from './SignUp/reducer';
import { VerifyEmailState } from './VerifyEmail/reducer';

export type AuthState = {
  user: UserState;
  registration: SignUpState;
  forgotPassword: ForgotPasswordState;
  resetPassword: ResetPasswordState;
  verifyEmail: VerifyEmailState;
};

const authSelector = (state: RootState) => state.auth;

export const getUserSelector = createSelector(authSelector, (state: AuthState) => state.user);

export const getRegistrationSelector = createSelector(
  authSelector,
  (state: AuthState) => state.registration
);

export const getForgotPasswordSelector = createSelector(
  authSelector,
  (state: AuthState) => state.forgotPassword
);

export const getResetPasswordSelector = createSelector(
  authSelector,
  (state: AuthState) => state.resetPassword
);

export const getVerifyEmailSelector = createSelector(
  authSelector,
  (state: AuthState) => state.verifyEmail
);
