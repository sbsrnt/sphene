import React, { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import { getUserSelector } from 'features/Auth/selectors';
import { signInUserSuccess } from 'features/Auth/SignIn/actions';

export const AuthContext = createContext({
  isLoading: false,
  isAuthenticated: false,
});

export const AuthProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector(getUserSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!isEmpty(token)) {
      dispatch(signInUserSuccess(user));
    }
    setIsLoading(false);
  }, [dispatch]);

  return <AuthContext.Provider value={{ ...user, isLoading }}>{children}</AuthContext.Provider>;
};
