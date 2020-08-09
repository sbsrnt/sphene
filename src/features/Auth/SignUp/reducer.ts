import { Reducer } from 'redux';
import { apiErrorBinder, apiSuccessBinder, failure, success } from 'utils/actionHelpers';

import { SIGN_UP_USER } from '../constants';

const initialState = {
  isLoading: false,
};

const SignUpReducer: Reducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case SIGN_UP_USER: {
      return {
        isLoading: true,
      };
    }

    case success(SIGN_UP_USER): {
      return {
        ...state,
        ...apiSuccessBinder(payload),
        isLoading: false,
      };
    }

    case failure(SIGN_UP_USER): {
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

export default SignUpReducer;
