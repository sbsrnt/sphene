import { failure, success } from 'utils/actionHelpers';

import { getResetPassword } from 'api';

import { RESET_PASSWORD } from '../constants';

export function resetPasswordRequest({ data, token }: any) {
  return {
    type: RESET_PASSWORD,
    payload: {
      request: {
        url: getResetPassword(token),
        data,
        method: 'POST',
      },
    },
  };
}

export function resetPasswordSuccess(payload: any) {
  return {
    type: success(RESET_PASSWORD),
    payload,
  };
}

export function requestPasswordFailure(error: any) {
  return {
    type: failure(RESET_PASSWORD),
    error,
  };
}
