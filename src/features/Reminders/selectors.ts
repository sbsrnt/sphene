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

export const getRemindersCreatingStatusSelector = createSelector(
  remindersSelector,
  (state: CreateReminderState) => state.isCreating
);

export const getRemindersLoadingStatusSelector = createSelector(
  remindersSelector,
  (state: CreateReminderState) => state.isLoading
);
