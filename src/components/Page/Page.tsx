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
  align-items: end;
  height: calc(40px + 2em);
`;

const StyledPageBody = styled.div`
  height: calc(100% - 40px - 2em);
  overflow: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.gray700};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.smokewhite};
    border-radius: 20px;
  }
`;

const Page = ({ children, title, actions }: Page) => (
  <ThemeProvider>
    <StyledPage>
      <HeaderWrapper>
        <h1>{title}</h1>
        {!!actions && <PageActions>{actions}</PageActions>}
      </HeaderWrapper>
      <StyledPageBody>{children}</StyledPageBody>
    </StyledPage>
  </ThemeProvider>
);

export default Page;
