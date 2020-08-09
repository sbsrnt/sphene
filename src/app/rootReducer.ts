import { combineReducers } from 'redux';

import forgotPasswordReducer from 'features/Auth/ForgotPassword/reducer';
import resetPasswordReducer from 'features/Auth/ResetPassword/reducer';
import signInReducer from 'features/Auth/SignIn/reducer';
import signUpReducer from 'features/Auth/SignUp/reducer';

const rootReducer = combineReducers({
  auth: combineReducers({
    user: signInReducer,
    registration: signUpReducer,
    resetPassword: resetPasswordReducer,
    forgotPassword: forgotPasswordReducer,
  }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
