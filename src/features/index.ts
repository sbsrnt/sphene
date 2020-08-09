// Auth
export { default as SignIn } from './Auth/SignIn';
export { default as SignUp } from './Auth/SignUp';
export { default as SignUpComplete } from './Auth/SignUpComplete';

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
