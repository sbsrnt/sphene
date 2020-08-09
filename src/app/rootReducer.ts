import { combineReducers } from 'redux';

import resetPasswordReducer from 'features/Auth/ResetPassword/reducer';
import signInReducer from 'features/Auth/SignIn/reducer';
import signUpReducer from 'features/Auth/SignUp/reducer';

const rootReducer = combineReducers({
  auth: combineReducers({
    user: signInReducer,
    registration: signUpReducer,
    resetPassword: resetPasswordReducer,
  }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
