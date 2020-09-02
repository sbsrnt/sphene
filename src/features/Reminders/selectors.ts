import { RootState } from 'app/rootReducer';
import { createSelector } from 'reselect';

import { CreateReminderState } from './reducer';

const remindersSelector = (state: RootState) => state.reminders;

export const getRemindersStateSelector = createSelector(
  remindersSelector,
  (state: CreateReminderState) => state
);

export const getRemindersSelector = createSelector(
  remindersSelector,
  (state: CreateReminderState) => state.reminders
);

export const getActiveReminderSelector = createSelector(
  remindersSelector,
  (state: CreateReminderState) => state.activeReminder
);

export const getFormActiveReminderSelector = createSelector(
  remindersSelector,
  ({ activeReminder }: CreateReminderState) => {
    const remindAt = activeReminder
      ? new Date(activeReminder.remindAt).toISOString().slice(0, 10)
      : '';
    const remindOn = activeReminder
      ? new Date(activeReminder.remindAt).toISOString().slice(11, 16)
      : '';

    return {
      title: activeReminder?.title || '',
      description: activeReminder?.description || '',
      occurrence: activeReminder?.occurrence || '',
      remindAt,
      remindOn,
      type: activeReminder?.type || '',
    };
  }
);

export const getRemindersCreatingStatusSelector = createSelector(
  remindersSelector,
  (state: CreateReminderState) => state.isCreating
);

export const getRemindersLoadingStatusSelector = createSelector(
  remindersSelector,
  (state: CreateReminderState) => state.isLoading
);

export const getRemindersDeletingStatusSelector = createSelector(
  remindersSelector,
  (state: CreateReminderState) => state.deletingId
);
