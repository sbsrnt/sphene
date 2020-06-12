import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

type Page = {
  children: ReactNode;
};

const StyledPage = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;
  padding: 1em;
`;

const Page: FC<Page> = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

export default Page;
