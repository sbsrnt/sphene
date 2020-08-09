import { Reducer } from 'redux';
import { apiErrorBinder, apiSuccessBinder, failure, success } from 'utils/actionHelpers';

import { SIGN_IN_USER } from '../constants';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
};

const SignInReducer: Reducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case SIGN_IN_USER: {
      return {
        isLoading: true,
        isAuthenticated: false,
      };
    }

    case success(SIGN_IN_USER): {
      return {
        ...state,
        ...apiSuccessBinder(payload),
        isLoading: false,
        isAuthenticated: true,
      };
    }

    case failure(SIGN_IN_USER): {
      return {
        ...state,
        ...apiErrorBinder(error),
        isLoading: false,
        isAuthenticated: false,
      };
    }

    default:
      return state;
  }
};

export default SignInReducer;
