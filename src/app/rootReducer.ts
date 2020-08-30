import { combineReducers } from 'redux';

import {
  forgotPasswordReducer,
  resetPasswordReducer,
  signInReducer,
  signUpReducer,
  verifyEmailReducer,
} from 'features/Auth/reducers';
import remindersReducer from 'features/Reminders/reducer';

const rootReducer = combineReducers({
  auth: combineReducers({
    user: signInReducer,
    registration: signUpReducer,
    resetPassword: resetPasswordReducer,
    forgotPassword: forgotPasswordReducer,
    verifyEmail: verifyEmailReducer,
  }),
  reminders: remindersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
