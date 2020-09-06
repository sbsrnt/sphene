const DOMAIN = `http://localhost:4000`;
/**
 * Auth
 */
export const getSignIn = () => `${DOMAIN}/auth/login`;
export const getSignUp = () => `${DOMAIN}/auth/register`;
export const getForgotPassword = () => `${DOMAIN}/auth/forgot-password`;
export const getResetPassword = (token: string) => `${DOMAIN}/auth/reset-password/${token}`;
export const getVerifyEmail = (token: string | {}) => `${DOMAIN}/auth/verify/${token}`;

/**
 * Reminders
 */
export const allReminders = () => `${DOMAIN}/reminders`;
export const getReminder = (reminderId: string) => `${DOMAIN}/reminders/${reminderId}`;
export const getUpcomingReminders = () => `${DOMAIN}/reminders/upcoming`;
