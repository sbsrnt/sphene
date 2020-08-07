import { Reducer } from 'redux';
import { failure, success } from 'utils/actionHelpers';

import FETCH_USER from './constants';

const initialState = {};

const AuthReducer: Reducer = (state = initialState, { type, payload, error, ...foo }) => {
  switch (type) {
    case FETCH_USER: {
      return {
        ...state,
      };
    }
    case success(FETCH_USER): {
      return {
        ...state,
        payload,
      };
    }

    case failure(FETCH_USER): {
      return {
        ...state,
        error,
      };
    }

    default:
      return state;
  }
};

export default AuthReducer;
