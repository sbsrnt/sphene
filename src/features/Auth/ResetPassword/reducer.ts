import { Reducer } from 'redux';
import { apiErrorBinder, apiSuccessBinder, failure, success } from 'utils/actionHelpers';

import { RESET_PASSWORD } from '../constants';

const initialState = {
  isLoading: false,
};

const ResetPasswordReducer: Reducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case RESET_PASSWORD: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case success(RESET_PASSWORD): {
      return {
        ...state,
        ...apiSuccessBinder(payload),
        isLoading: false,
      };
    }

    case failure(RESET_PASSWORD): {
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

export default ResetPasswordReducer;
