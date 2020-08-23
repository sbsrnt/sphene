import { failure, success } from 'utils/actionHelpers';

import { getVerifyEmail } from 'api';

import { VERIFY_EMAIL } from '../constants';

export function verifyEmailRequest(token: string | {}) {
  return {
    type: VERIFY_EMAIL,
    payload: {
      request: {
        method: 'GET',
        url: getVerifyEmail(token),
      },
    },
  };
}

export function verifyEmailSuccess(payload: any) {
  return {
    type: success(VERIFY_EMAIL),
    payload,
  };
}

export function verifyEmailFailure(error: any) {
  return {
    type: failure(VERIFY_EMAIL),
    error,
  };
}
