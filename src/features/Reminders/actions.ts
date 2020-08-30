import { failure, success } from 'utils/actionHelpers';

import { allReminders } from 'api';

import { CREATE_REMINDER, GET_ALL_REMINDERS } from './constants';

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
