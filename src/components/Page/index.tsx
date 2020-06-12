import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { ThemeProvider } from 'context-providers';

type Page = {
  children: ReactNode;
  title: string;
};

const StyledPage = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;
  padding: 1em;
  background: ${(props) => props.theme.bg.secondary};

  h2 {
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 0.5em;
  }
`;

const Page: FC<Page> = ({ children, title }) => (
  <ThemeProvider>
    <StyledPage>
      <h2>{title}</h2>
      {children}
    </StyledPage>
  </ThemeProvider>
);

export default Page;
