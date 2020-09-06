import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { differenceInMilliseconds } from 'date-fns';

import { getUpcomingRemindersRequest } from 'features/Reminders/actions';
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
        triggerSystemNotification(reminder);
      }, triggerTime);
      await timeoutIds.push(timeoutId);
    });
    return timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
  }, [countUpcomingReminders]);

  const triggerSystemNotification = (reminder: Partial<Reminder>) => {
    const s = new Notification('XD', {
      body: 'TEST',
      requireInteraction: true,
    });
    console.log(s);
    // s.onclick = () => ipcRenderer.send('notify', (e: any) => console.log(e));
    s.onclick = () => window.shellOpenExternal('https://google.com');
  };
};

export default useRemindersPooling;
