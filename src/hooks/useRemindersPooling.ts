import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { differenceInMilliseconds } from 'date-fns';
import systemNotification from 'utils/systemNotification';

import { getSingleReminderRequest, getUpcomingRemindersRequest } from 'features/Reminders/actions';
import { Reminder } from 'features/Reminders/RemindersList/Reminder';
import { getRemindersSelector, getUpcomingRemindersSelector } from 'features/Reminders/selectors';

const useRemindersPooling = () => {
  const reminders = useSelector(getRemindersSelector);
  const upcomingReminders = useSelector(getUpcomingRemindersSelector);
  const dispatch = useDispatch();
  const countReminders = reminders.length;
  const countUpcomingReminders = upcomingReminders.length;
  const interval = 50000;

  useEffect(() => {
    if (countReminders === 0) return;
    dispatch(getUpcomingRemindersRequest());

    const intervalId = setInterval(() => {
      dispatch(getUpcomingRemindersRequest());
    }, interval);

    return () => clearInterval(intervalId);
  }, [dispatch, countReminders]);

  useEffect(() => {
    if (countUpcomingReminders === 0) return;
    let timeoutIds: number[] = [];

    upcomingReminders.forEach(async ({ _id, remindAt, ...reminder }: Reminder) => {
      const triggerTime = await differenceInMilliseconds(new Date(remindAt), new Date());
      const timeoutId = await window.setTimeout(() => {
        systemNotification({ title: reminder.title, body: reminder.description });
        dispatch(getSingleReminderRequest(_id));
      }, triggerTime);
      // await timeoutIds.push(timeoutId);
    });
    return timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
  }, [countUpcomingReminders]);
};

export default useRemindersPooling;
