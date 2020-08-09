import { failure, success } from 'utils/actionHelpers';

import { getForgotPassword } from 'api';

import { FORGOT_PASSWORD } from '../constants';

export function forgotPasswordRequest(data: any) {
  return {
    type: FORGOT_PASSWORD,
    payload: {
      request: {
        url: getForgotPassword(),
        data,
        method: 'POST',
      },
    },
  };
}

export function forgotPasswordSuccess(payload: any) {
  return {
    type: success(FORGOT_PASSWORD),
    payload,
  };
}

export function forgotPasswordFailure(error: any) {
  return {
    type: failure(FORGOT_PASSWORD),
    error,
  };
}
