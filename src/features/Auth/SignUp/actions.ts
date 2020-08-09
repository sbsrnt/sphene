import { failure, success } from 'utils/actionHelpers';

import { getSignUp } from 'api';

import { SIGN_UP_USER } from '../constants';

export function signUpUserRequest(payload: any) {
  return {
    type: SIGN_UP_USER,
    payload: {
      request: {
        url: getSignUp(),
        data: payload,
        method: 'POST',
      },
    },
  };
}

export function signUpUserSuccess(payload: any) {
  return {
    type: success(SIGN_UP_USER),
    payload,
  };
}

export function signUpUserFailure(error: any) {
  return {
    type: failure(SIGN_UP_USER),
    error,
  };
}
