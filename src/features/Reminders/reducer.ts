import { Reducer } from 'redux';
import { apiErrorBinder, apiSuccessBinder, failure, success } from 'utils/actionHelpers';

import { APIError } from 'types';

import {
  CREATE_REMINDER,
  DELETE_REMINDER,
  GET_ALL_REMINDERS,
  GET_SINGLE_REMINDER,
  GET_UPCOMING_REMINDERS,
  SET_ACTIVE_REMINDER,
  UPDATE_REMINDER,
} from './constants';
import { Reminder } from './RemindersList/Reminder';

export type CreateReminderState = {
  isLoading: boolean;
  isCreating: boolean;
  isUpcomingLoading: boolean;
  deletingId: string | null;
  reminders: Reminder[];
  activeReminder: Reminder | null;
  error?: APIError;
  upcomingReminders: Reminder[];
};

const initialState = {
  isLoading: false,
  isCreating: false,
  isUpcomingLoading: false,
  deletingId: null,
  reminders: [],
  upcomingReminders: [],
};

const ReminderReducer: Reducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    /**
     * Get All
     */
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

    /**
     * Get single
     */
    case GET_SINGLE_REMINDER: {
      return {
        ...state,
      };
    }

    case success(GET_SINGLE_REMINDER): {
      const updatedReminders = state.reminders.map((reminder: Reminder) => {
        if (reminder._id !== payload._id) {
          return reminder;
        }

        return {
          ...reminder,
          ...payload,
        };
      });

      return {
        ...state,
        reminders: updatedReminders,
      };
    }

    case failure(GET_SINGLE_REMINDER): {
      return {
        ...state,
        ...apiErrorBinder(error),
      };
    }

    case SET_ACTIVE_REMINDER: {
      return {
        ...state,
        activeReminder: payload,
      };
    }

    /**
     * Create
     */
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

    case UPDATE_REMINDER: {
      return {
        ...state,
        isCreating: true,
      };
    }

    case success(UPDATE_REMINDER): {
      const updatedReminders = state.reminders.map((reminder: Reminder) => {
        if (reminder._id !== payload._id) {
          return reminder;
        }

        return {
          ...reminder,
          ...payload,
        };
      });

      return {
        ...state,
        reminders: updatedReminders,
        isCreating: false,
      };
    }

    case failure(UPDATE_REMINDER): {
      return {
        ...state,
        ...apiErrorBinder(error),
        isCreating: false,
      };
    }

    case DELETE_REMINDER: {
      return {
        ...state,
        isDeleting: payload._id,
      };
    }

    case success(DELETE_REMINDER): {
      const updatedReminders = state.reminders.filter(
        (reminder: Reminder) => reminder._id !== payload._id
      );

      return {
        ...state,
        reminders: updatedReminders,
        isDeleting: null,
      };
    }

    case failure(DELETE_REMINDER): {
      return {
        ...state,
        ...apiErrorBinder(error),
        isDeleting: null,
      };
    }

    case GET_UPCOMING_REMINDERS: {
      return {
        ...state,
        isUpcomingLoading: true,
      };
    }

    case success(GET_UPCOMING_REMINDERS): {
      return {
        ...state,
        upcomingReminders: payload || [],
        isUpcomingLoading: false,
      };
    }

    case failure(GET_UPCOMING_REMINDERS): {
      return {
        ...state,
        isUpcomingLoading: false,
      };
    }

    default:
      return state;
  }
};

export default ReminderReducer;
