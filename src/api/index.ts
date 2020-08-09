const DOMAIN = 'http://localhost:4000';

export const getSignIn = () => `${DOMAIN}/auth/login`;
export const getSignUp = () => `${DOMAIN}/auth/register`;
export const getResetPassword = (token: string) => `${DOMAIN}/auth/reset-password/${token}`;
