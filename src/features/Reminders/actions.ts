import { failure, success } from 'utils/actionHelpers';

import { allReminders, getReminder, getUpcomingReminders } from 'api';

import {
  CREATE_REMINDER,
  DELETE_REMINDER,
  GET_ALL_REMINDERS,
  GET_UPCOMING_REMINDERS,
  SET_ACTIVE_REMINDER,
  UPDATE_REMINDER,
} from './constants';
import { Reminder } from './RemindersList/Reminder';

/**
 * Get
 */
export function getAllRemindersRequest() {
  return {
    type: GET_ALL_REMINDERS,
    payload: {
      request: {
        url: allReminders(),
        method: 'GET',
      },
    },
  };
}

export function getAllRemindersSuccess(payload: any) {
  return {
    type: success(CREATE_REMINDER),
    payload,
  };
}

export function getAllRemindersFailure(error: any) {
  return {
    type: failure(GET_ALL_REMINDERS),
    error,
  };
}

/**
 * Create
 */
export function createReminderRequest(data: any) {
  return {
    type: CREATE_REMINDER,
    payload: {
      request: {
        url: allReminders(),
        data,
        method: 'POST',
      },
    },
  };
}

export function createReminderSuccess(payload: any) {
  return {
    type: success(CREATE_REMINDER),
    payload,
  };
}

export function createReminderFailure(error: any) {
  return {
    type: failure(CREATE_REMINDER),
    error,
  };
}

/**
 * Update
 */
export function updateReminderRequest(data: any) {
  return {
    type: UPDATE_REMINDER,
    payload: {
      request: {
        url: getReminder(data._id),
        data,
        method: 'PUT',
      },
    },
  };
}

export function updateReminderSuccess(payload: any) {
  return {
    type: success(UPDATE_REMINDER),
    payload,
  };
}

export function updateReminderFailure(error: any) {
  return {
    type: failure(UPDATE_REMINDER),
    error,
  };
}

/**
 * Delete
 */
export function deleteReminderRequest(_id: any) {
  return {
    type: DELETE_REMINDER,
    payload: {
      _id,
      request: {
        url: getReminder(_id),
        method: 'DELETE',
      },
    },
  };
}

export function deleteReminderSuccess(payload: any) {
  return {
    type: success(UPDATE_REMINDER),
    payload,
  };
}

export function deleteReminderFailure(error: any) {
  return {
    type: failure(UPDATE_REMINDER),
    error,
  };
}

/**
 * Upcoming
 */
export function getUpcomingRemindersRequest() {
  return {
    type: GET_UPCOMING_REMINDERS,
    payload: {
      request: {
        url: getUpcomingReminders(),
        method: 'GET',
      },
    },
  };
}

export function getUpcomingReminderSuccess(payload: Reminder[] | []) {
  return {
    type: success(GET_UPCOMING_REMINDERS),
    payload,
  };
}

/**
 * Misc
 */
export function setActiveReminder(payload: Reminder | null) {
  return {
    type: SET_ACTIVE_REMINDER,
    payload,
  };
}
