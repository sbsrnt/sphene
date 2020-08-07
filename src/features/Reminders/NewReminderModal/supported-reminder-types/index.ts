import PaymentsReminder from './Payments';

const supportedReminderTypes = [
  {
    reminderType: 'payments',
    ReminderComponent: PaymentsReminder,
  },
];

export default supportedReminderTypes;
