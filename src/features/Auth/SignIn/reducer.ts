import { Reducer } from 'redux';
import { apiErrorBinder, apiSuccessBinder, failure, success } from 'utils/actionHelpers';

import { APIError } from 'types';

import { SIGN_IN_USER, SIGN_OUT_USER } from '../constants';

export type UserState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  access_token?: string;
  error?: APIError;
};

const initialState = {
  isLoading: false,
  isAuthenticated: false,
};

const SignInReducer: Reducer<UserState> = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case SIGN_IN_USER: {
      return {
        isLoading: true,
        isAuthenticated: false,
      };
    }

    case success(SIGN_IN_USER): {
      const { access_token } = apiSuccessBinder(payload);
      if (!localStorage.getItem('token')) {
        localStorage.setItem('token', access_token);
      }
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

    case SIGN_OUT_USER: {
      localStorage.setItem('token', '');

      return {
        ...state,
        isAuthenticated: false,
      };
    }

    default:
      return state;
  }
};

export default SignInReducer;
