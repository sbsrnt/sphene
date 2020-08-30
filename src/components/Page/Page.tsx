import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { ThemeProvider } from 'context-providers';

import PageActions from './PageActions/PageActions';

type Page = {
  children: ReactNode;
  title: string;
  actions?: ReactNode;
};

const StyledPage = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;
  padding: 1em;
  background: ${(props) => props.theme.colors.gray100};
  color: ${(props) => props.theme.colors.white};

  > h2 {
    color: ${(props) => props.theme.colors.white};
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
  align-items: center;
`;

const Page = ({ children, title, actions }: Page) => (
  <ThemeProvider>
    <StyledPage>
      <HeaderWrapper>
        <h2>{title}</h2>
        {!!actions && <PageActions>{actions}</PageActions>}
      </HeaderWrapper>
      {children}
    </StyledPage>
  </ThemeProvider>
);

export default Page;
