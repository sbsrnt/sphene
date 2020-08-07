// Auth
export { default as Login } from './Auth/Login';

export { default as Invoicing } from './Invoicing';
export { default as Reminders } from './Reminders';

export const NAV_FEATURES = [
  {
    path: '/invoicing',
    icon: 'request_quote',
    label: 'Invoicing',
  },
  {
    path: '/reminders',
    icon: 'notifications',
    label: 'Reminders',
  },
];
