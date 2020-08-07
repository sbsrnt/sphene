import { failure, success } from 'utils/actionHelpers';

import { getLogin } from 'api';

import FETCH_USER from './constants';

export function fetchUserRequest(payload: any) {
  return {
    type: FETCH_USER,
    payload: {
      request: {
        url: getLogin(),
        data: payload,
        method: 'POST',
      },
    },
  };
}

export function fetchUserSuccess(payload: any) {
  return {
    type: success(FETCH_USER),
    payload,
  };
}

export function fetchUserFailure(payload: any) {
  console.log(payload);
  return {
    type: failure(FETCH_USER),
    ...payload,
  };
}
