import { Reducer } from 'redux';
import { apiErrorBinder, apiSuccessBinder, failure, success } from 'utils/actionHelpers';

import { VERIFY_EMAIL } from '../constants';

export type VerifyEmailState = {
  isLoading: boolean;
  error?: any;
};

const initialState = {
  isLoading: false,
};

const VerifyEmailReducer: Reducer<VerifyEmailState> = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case VERIFY_EMAIL: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case success(VERIFY_EMAIL): {
      return {
        ...state,
        ...apiSuccessBinder(payload),
        isLoading: false,
      };
    }

    case failure(VERIFY_EMAIL): {
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

export default VerifyEmailReducer;
