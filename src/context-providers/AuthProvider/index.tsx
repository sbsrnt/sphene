import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getUserSelector } from 'features/Auth/selectors';

export const AuthContext = React.createContext({
  isLoading: false,
  isAuthenticated: false,
});

export const AuthProvider = ({ children }: any) => {
  const user = useSelector(getUserSelector);
  console.log(user);
  useEffect(() => {}, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
