import { Reducer } from 'redux';
import { apiErrorBinder, apiSuccessBinder, failure, success } from 'utils/actionHelpers';

import { APIError } from 'types';

import { FORGOT_PASSWORD } from '../constants';

export type ForgotPasswordState = {
  isLoading: boolean;
  error?: APIError;
};

const initialState = {
  isLoading: false,
};

const ForgotPasswordReducer: Reducer<ForgotPasswordState> = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case FORGOT_PASSWORD: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case success(FORGOT_PASSWORD): {
      return {
        ...state,
        ...apiSuccessBinder(payload),
        isLoading: false,
      };
    }

    case failure(FORGOT_PASSWORD): {
      return {
        ...state,
        ...apiErrorBinder(error),
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default ForgotPasswordReducer;
