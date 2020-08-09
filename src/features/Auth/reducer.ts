import { Reducer } from 'redux';
import { apiErrorBinder, apiSuccessBinder, failure, success } from 'utils/actionHelpers';

import FETCH_USER from './constants';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
};

const AuthReducer: Reducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case FETCH_USER: {
      return {
        isFetching: true,
        isAuthenticated: false,
      };
    }

    case success(FETCH_USER): {
      return {
        ...state,
        ...apiSuccessBinder(payload),
        isFetching: false,
        isAuthenticated: true,
      };
    }

    case failure(FETCH_USER): {
      return {
        ...state,
        ...apiErrorBinder(error),
        isFetching: false,
        isAuthenticated: false,
      };
    }

    default:
      return state;
  }
};

export default AuthReducer;
