import { Reducer } from 'redux';
import { apiErrorBinder, apiSuccessBinder, failure, success } from 'utils/actionHelpers';

import { APIError } from 'types';

import { CREATE_REMINDER, GET_ALL_REMINDERS } from './constants';
import { Reminder } from './RemindersList/Reminder';

export type CreateReminderState = {
  isLoading: boolean;
  isCreating: boolean;
  reminders: Reminder[];
  error?: APIError;
};

const initialState = {
  isLoading: false,
  isCreating: false,
  reminders: [],
};

const ReminderReducer: Reducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case GET_ALL_REMINDERS: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case success(GET_ALL_REMINDERS): {
      return {
        ...state,
        reminders: apiSuccessBinder(payload),
        isLoading: false,
      };
    }

    case failure(GET_ALL_REMINDERS): {
      return {
        ...state,
        ...apiErrorBinder(error),
        isLoading: false,
      };
    }

    case CREATE_REMINDER: {
      return {
        ...state,
        isCreating: true,
      };
    }

    case success(CREATE_REMINDER): {
      const concatReducer = state.reminders.concat(apiSuccessBinder(payload));
      return {
        ...state,
        reminders: concatReducer,
        isCreating: false,
      };
    }

    case failure(CREATE_REMINDER): {
      return {
        ...state,
        ...apiErrorBinder(error),
        isCreating: false,
      };
    }

    default:
      return state;
  }
};

export default ReminderReducer;
