import { Reducer } from 'redux';
import { apiErrorBinder, apiSuccessBinder, failure, success } from 'utils/actionHelpers';

import { FORGOT_PASSWORD } from '../constants';

const initialState = {
  isLoading: false,
};

const ForgotPasswordReducer: Reducer = (state = initialState, { type, payload, error }) => {
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
