import React, { FC, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { light } from 'theme';

type ThemeProvider = {
  children?: ReactNode;
};
const ThemeProvider: FC<ThemeProvider> = ({ children }) => (
  <StyledThemeProvider theme={light}>{children}</StyledThemeProvider>
);

export default ThemeProvider;
