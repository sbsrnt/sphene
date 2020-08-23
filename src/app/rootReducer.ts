import { combineReducers } from 'redux';

import {
  forgotPasswordReducer,
  resetPasswordReducer,
  signInReducer,
  signUpReducer,
  verifyEmailReducer,
} from 'features/Auth/reducers';

const rootReducer = combineReducers({
  auth: combineReducers({
    user: signInReducer,
    registration: signUpReducer,
    resetPassword: resetPasswordReducer,
    forgotPassword: forgotPasswordReducer,
    verifyEmail: verifyEmailReducer,
  }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
