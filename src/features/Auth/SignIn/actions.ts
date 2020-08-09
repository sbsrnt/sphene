import { failure, success } from 'utils/actionHelpers';

import { getSignIn } from 'api';

import { SIGN_IN_USER } from '../constants';

export function signInUserRequest(payload: any) {
  return {
    type: SIGN_IN_USER,
    payload: {
      request: {
        url: getSignIn(),
        data: payload,
        method: 'POST',
      },
    },
  };
}

export function signInUserSuccess(payload: any) {
  return {
    type: success(SIGN_IN_USER),
    payload,
  };
}

export function signInUserFailure(error: any) {
  return {
    type: failure(SIGN_IN_USER),
    error,
  };
}
