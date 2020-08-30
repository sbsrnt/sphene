import PaymentsReminder from './Payments';

const supportedReminderTypes = [
  {
    reminderType: 'payment',
    reminderValue: 0,
    ReminderComponent: PaymentsReminder,
  },
  {
    reminderType: 'birthday',
    reminderValue: 1,
    ReminderComponent: PaymentsReminder,
  },
  {
    reminderType: 'event',
    reminderValue: 2,
    ReminderComponent: PaymentsReminder,
  },
];

export default supportedReminderTypes;
