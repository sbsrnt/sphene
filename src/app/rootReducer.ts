import { combineReducers } from 'redux';

import signInReducer from 'features/Auth/SignIn/reducer';

const rootReducer = combineReducers({
  auth: combineReducers({
    user: signInReducer,
  }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
